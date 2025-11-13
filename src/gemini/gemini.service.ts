import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import {
  GoogleGenerativeAI,
  GenerativeModel,
  Part,
} from '@google/generative-ai';
import { InjectGemini } from './decorators/inject-gemini.decorator';
import type { GeminiOptions } from './interfaces/gemini-options.interface';
import {
  Flashcard,
  FlashcardGenerationResponse,
} from './interfaces/flashcard.interface';
import {
  Question,
  QuestionGenerationResponse,
} from './interfaces/question.interface';
import { FileValidator } from './utils/file-validator';
import { RateLimiter } from './utils/rate-limiter';
import { RetryHandler } from './utils/retry-handler';
import { ResponseCache } from './cache/response-cache';
import { FileUploader } from './utils/file-uploader';
import { GeminiApiException } from 'src/exceptions/GeminiApiException';
import {
  DEFAULT_MODEL,
  DEFAULT_TEMPERATURE,
  DEFAULT_MAX_TOKENS,
  DEFAULT_TOP_P,
  DEFAULT_TOP_K,
  DEFAULT_REQUESTS_PER_MINUTE,
  DEFAULT_MAX_RETRIES,
  DEFAULT_RETRY_DELAY,
  DEFAULT_CACHE_TTL,
  FLASHCARD_GENERATION_PROMPT,
  QUESTION_GENERATION_PROMPT,
} from './constants/gemini.constants';
import { DEFAULT_SAFETY_SETTINGS } from './interfaces/gemini-options.interface';

/**
 * Main service for interacting with Google Gemini AI
 *
 * Provides methods for:
 * - General content generation
 * - File-based content generation (PDF, images)
 * - Flashcard generation from educational content
 * - Question generation for assessments
 * - Streaming responses
 *
 * Features:
 * - Automatic retry with exponential backoff
 * - Rate limiting
 * - Response caching
 * - File validation
 * - Comprehensive error handling
 *
 * @example
 * ```typescript
 * const response = await geminiService.generateContent('Explain quantum physics');
 * const flashcards = await geminiService.generateFlashcards(pdfBuffer, 'application/pdf');
 * ```
 */
@Injectable()
export class GeminiService implements OnModuleInit {
  private readonly logger = new Logger(GeminiService.name);
  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel;
  private rateLimiter?: RateLimiter;
  private cache?: ResponseCache;
  private fileUploader?: FileUploader;

  constructor(@InjectGemini() private readonly options: GeminiOptions) {}

  /**
   * Initialize the service on module startup
   */
  onModuleInit() {
    this.logger.log('Initializing Gemini AI service...');

    // Initialize Google Generative AI client
    this.genAI = new GoogleGenerativeAI(this.options.apiKey);

    // Initialize model with configuration
    const modelName = this.options.model || DEFAULT_MODEL;
    this.model = this.genAI.getGenerativeModel({
      model: modelName,
      generationConfig: {
        temperature: this.options.temperature ?? DEFAULT_TEMPERATURE,
        maxOutputTokens: this.options.maxTokens ?? DEFAULT_MAX_TOKENS,
        topP: this.options.topP ?? DEFAULT_TOP_P,
        topK: this.options.topK ?? DEFAULT_TOP_K,
      },
      safetySettings: this.options.safetySettings || DEFAULT_SAFETY_SETTINGS,
    });

    // Initialize rate limiter if enabled
    if (this.options.enableRateLimit !== false) {
      const requestsPerMinute =
        this.options.requestsPerMinute || DEFAULT_REQUESTS_PER_MINUTE;
      this.rateLimiter = new RateLimiter(requestsPerMinute);
      this.logger.log(`Rate limiter enabled: ${requestsPerMinute} req/min`);
    }

    // Initialize cache if enabled
    if (this.options.enableCache) {
      this.cache = new ResponseCache();
      this.logger.log('Response caching enabled');
    }

    // Initialize file uploader for large files
    this.fileUploader = new FileUploader(this.options.apiKey);
    this.logger.log('File uploader initialized for files >20MB');

    this.logger.log(`Gemini AI service initialized with model: ${modelName}`);
  }

  /**
   * Generate content from a text prompt
   *
   * @param prompt - The input prompt
   * @param options - Optional generation parameters
   * @returns Generated content as string
   *
   * @example
   * ```typescript
   * const content = await geminiService.generateContent(
   *   'Explain the water cycle',
   *   { temperature: 0.5 }
   * );
   * ```
   */
  async generateContent(
    prompt: string,
    options?: Partial<Pick<GeminiOptions, 'temperature' | 'maxTokens'>>,
  ): Promise<string> {
    this.logger.debug(
      `Generating content for prompt: ${prompt.substring(0, 50)}...`,
    );

    // Check cache first
    if (this.cache) {
      const cached = this.cache.getCached<string>(prompt, options);
      if (cached) {
        return cached;
      }
    }

    // Check rate limit
    this.rateLimiter?.checkLimit();

    const startTime = Date.now();

    try {
      const result = await RetryHandler.execute(
        async () => {
          // Create temporary model with custom options if provided
          const model = options ? this.createCustomModel(options) : this.model;

          return await model.generateContent(prompt);
        },
        this.options.maxRetries ?? DEFAULT_MAX_RETRIES,
        this.options.retryDelay ?? DEFAULT_RETRY_DELAY,
        'generateContent',
      );

      const text = result.response.text();
      const duration = Date.now() - startTime;

      this.logger.log(`Content generated successfully in ${duration}ms`);

      // Cache response
      if (this.cache) {
        this.cache.setCached(
          text,
          this.options.cacheTTL ?? DEFAULT_CACHE_TTL,
          prompt,
          options,
        );
      }

      return text;
    } catch (error) {
      this.handleError(error, 'generateContent');
      throw error;
    }
  }

  /**
   * Generate content from a prompt with file attachment
   *
   * @param prompt - The input prompt
   * @param fileBuffer - File data as Buffer
   * @param mimeType - File MIME type
   * @returns Generated content as string
   *
   * @example
   * ```typescript
   * const analysis = await geminiService.generateContentWithFile(
   *   'Summarize this document',
   *   pdfBuffer,
   *   'application/pdf'
   * );
   * ```
   */
  async generateContentWithFile(
    prompt: string,
    fileBuffer: Buffer,
    mimeType: string,
  ): Promise<string> {
    this.logger.debug(
      `Generating content with file: ${mimeType}, size: ${fileBuffer.length} bytes`,
    );

    // Validate file
    FileValidator.validate(fileBuffer, mimeType);

    // Check rate limit
    this.rateLimiter?.checkLimit();

    const startTime = Date.now();

    try {
      const result = await RetryHandler.execute(
        async () => {
          const parts: Part[] = [
            {
              inlineData: {
                data: fileBuffer.toString('base64'),
                mimeType,
              },
            },
            { text: prompt },
          ];

          return await this.model.generateContent(parts);
        },
        this.options.maxRetries ?? DEFAULT_MAX_RETRIES,
        this.options.retryDelay ?? DEFAULT_RETRY_DELAY,
        'generateContentWithFile',
      );

      const text = result.response.text();
      const duration = Date.now() - startTime;

      this.logger.log(
        `Content with file generated successfully in ${duration}ms`,
      );

      return text;
    } catch (error) {
      this.handleError(error, 'generateContentWithFile');
      throw error;
    }
  }

  /**
   * Generate flashcards from educational content
   *
   * @param fileBuffer - File data (PDF or image)
   * @param mimeType - File MIME type
   * @returns Array of generated flashcards
   *
   * @example
   * ```typescript
   * const result = await geminiService.generateFlashcards(
   *   pdfBuffer,
   *   'application/pdf'
   * );
   * console.log(`Generated ${result.total} flashcards`);
   * ```
   */
  async generateFlashcards(
    fileBuffer: Buffer,
    mimeType: string,
  ): Promise<FlashcardGenerationResponse> {
    this.logger.log('Generating flashcards from file');

    const startTime = Date.now();
    const modelName = this.options.model || DEFAULT_MODEL;

    try {
      // Use custom model with higher token limit for flashcards
      const customModel = this.createCustomModel({ maxTokens: 8192 });

      // Validate file
      FileValidator.validate(fileBuffer, mimeType);
      this.rateLimiter?.checkLimit();

      // Check if file is large and needs File API
      const useLargeFileApi = FileValidator.shouldUseFileApi(fileBuffer);
      let uploadedFileName: string | undefined;

      const result = await RetryHandler.execute(
        async () => {
          let parts: Part[];

          if (useLargeFileApi && this.fileUploader) {
            // Upload large file using File API
            this.logger.log(
              `File size: ${fileBuffer.length} bytes - Using File API`,
            );
            const uploadResult = await this.fileUploader.uploadFile(
              fileBuffer,
              mimeType,
              `flashcards-${Date.now()}`,
            );
            uploadedFileName = uploadResult.fileName;

            // Wait for file to be processed
            await this.fileUploader.waitForFileProcessing(
              uploadResult.fileName,
            );

            parts = [
              {
                fileData: {
                  mimeType,
                  fileUri: uploadResult.fileUri,
                },
              },
              { text: FLASHCARD_GENERATION_PROMPT },
            ];
          } else {
            // Use inline data for small files
            parts = [
              {
                inlineData: {
                  data: fileBuffer.toString('base64'),
                  mimeType,
                },
              },
              { text: FLASHCARD_GENERATION_PROMPT },
            ];
          }

          return await customModel.generateContent(parts);
        },
        this.options.maxRetries ?? DEFAULT_MAX_RETRIES,
        this.options.retryDelay ?? DEFAULT_RETRY_DELAY,
        'generateFlashcards',
      );

      // Clean up uploaded file if used
      if (uploadedFileName && this.fileUploader) {
        await this.fileUploader.deleteFile(uploadedFileName);
      }

      // Check if response has candidates
      if (
        !result.response.candidates ||
        result.response.candidates.length === 0
      ) {
        this.logger.error(
          'No candidates in response. Safety filters may have blocked the content.',
        );
        this.logger.error(
          `Prompt feedback: ${JSON.stringify(result.response.promptFeedback)}`,
        );
        throw new GeminiApiException(
          'AI generation blocked. This may be due to safety filters or content policy violations.',
        );
      }

      const content = result.response.text();

      if (!content || content.trim().length === 0) {
        // Check finish reason
        const finishReason = result.response.candidates[0]?.finishReason;
        this.logger.error(`Empty response. Finish reason: ${finishReason}`);

        if (finishReason === 'MAX_TOKENS') {
          throw new GeminiApiException(
            'AI response exceeded token limit. Try increasing maxTokens or using a smaller file.',
          );
        }

        throw new GeminiApiException(
          `AI returned empty response. Finish reason: ${finishReason || 'UNKNOWN'}`,
        );
      }

      // Parse JSON response
      const parsedData = this.parseJsonResponse<{ flashcards: Flashcard[] }>(
        content,
      );

      const duration = Date.now() - startTime;

      const response: FlashcardGenerationResponse = {
        flashcards: parsedData.flashcards,
        total: parsedData.flashcards.length,
        metadata: {
          model: modelName,
          processingTime: duration,
        },
      };

      this.logger.log(
        `Generated ${response.total} flashcards in ${duration}ms`,
      );

      return response;
    } catch (error) {
      this.handleError(error, 'generateFlashcards');
      throw error;
    }
  }

  /**
   * Generate multiple-choice questions from educational content
   *
   * @param fileBuffer - File data (PDF or image)
   * @param mimeType - File MIME type
   * @param count - Number of questions to generate (optional)
   * @returns Array of generated questions
   *
   * @example
   * ```typescript
   * const result = await geminiService.generateQuestions(
   *   imageBuffer,
   *   'image/jpeg',
   *   10
   * );
   * ```
   */
  async generateQuestions(
    fileBuffer: Buffer,
    mimeType: string,
    count?: number,
  ): Promise<QuestionGenerationResponse> {
    this.logger.log(`Generating ${count || 'multiple'} questions from file`);

    const startTime = Date.now();
    const modelName = this.options.model || DEFAULT_MODEL;

    try {
      const prompt = count
        ? `${QUESTION_GENERATION_PROMPT}\n\nGere exatamente ${count} questões.`
        : QUESTION_GENERATION_PROMPT;

      // Use custom model with higher token limit for questions
      const customModel = this.createCustomModel({ maxTokens: 8192 });

      // Validate file
      FileValidator.validate(fileBuffer, mimeType);
      this.rateLimiter?.checkLimit();

      // Check if file is large and needs File API
      const useLargeFileApi = FileValidator.shouldUseFileApi(fileBuffer);
      let uploadedFileName: string | undefined;

      const result = await RetryHandler.execute(
        async () => {
          let parts: Part[];

          if (useLargeFileApi && this.fileUploader) {
            // Upload large file using File API
            this.logger.log(
              `File size: ${fileBuffer.length} bytes - Using File API`,
            );
            const uploadResult = await this.fileUploader.uploadFile(
              fileBuffer,
              mimeType,
              `questions-${Date.now()}`,
            );
            uploadedFileName = uploadResult.fileName;

            // Wait for file to be processed
            await this.fileUploader.waitForFileProcessing(
              uploadResult.fileName,
            );

            parts = [
              {
                fileData: {
                  mimeType,
                  fileUri: uploadResult.fileUri,
                },
              },
              { text: prompt },
            ];
          } else {
            // Use inline data for small files
            parts = [
              {
                inlineData: {
                  data: fileBuffer.toString('base64'),
                  mimeType,
                },
              },
              { text: prompt },
            ];
          }

          return await customModel.generateContent(parts);
        },
        this.options.maxRetries ?? DEFAULT_MAX_RETRIES,
        this.options.retryDelay ?? DEFAULT_RETRY_DELAY,
        'generateQuestions',
      );

      // Clean up uploaded file if used
      if (uploadedFileName && this.fileUploader) {
        await this.fileUploader.deleteFile(uploadedFileName);
      }

      // Check if response has candidates
      if (
        !result.response.candidates ||
        result.response.candidates.length === 0
      ) {
        this.logger.error(
          'No candidates in response. Safety filters may have blocked the content.',
        );
        this.logger.error(
          `Prompt feedback: ${JSON.stringify(result.response.promptFeedback)}`,
        );
        throw new GeminiApiException(
          'AI generation blocked. This may be due to safety filters or content policy violations.',
        );
      }

      const content = result.response.text();

      if (!content || content.trim().length === 0) {
        // Check finish reason
        const finishReason = result.response.candidates[0]?.finishReason;
        this.logger.error(`Empty response. Finish reason: ${finishReason}`);

        if (finishReason === 'MAX_TOKENS') {
          throw new GeminiApiException(
            'AI response exceeded token limit. Try increasing maxTokens or using a smaller file.',
          );
        }

        throw new GeminiApiException(
          `AI returned empty response. Finish reason: ${finishReason || 'UNKNOWN'}`,
        );
      }

      // Parse JSON response
      const parsedData = this.parseJsonResponse<{ questions: Question[] }>(
        content,
      );

      const duration = Date.now() - startTime;

      const response: QuestionGenerationResponse = {
        questions: parsedData.questions,
        total: parsedData.questions.length,
        metadata: {
          model: modelName,
          processingTime: duration,
        },
      };

      this.logger.log(`Generated ${response.total} questions in ${duration}ms`);

      return response;
    } catch (error) {
      this.handleError(error, 'generateQuestions');
      throw error;
    }
  }

  /**
   * Stream content generation (yields chunks as they arrive)
   *
   * @param prompt - The input prompt
   * @returns AsyncGenerator yielding content chunks
   *
   * @example
   * ```typescript
   * for await (const chunk of geminiService.streamContent('Write a story')) {
   *   console.log(chunk);
   * }
   * ```
   */
  async *streamContent(prompt: string): AsyncGenerator<string, void, unknown> {
    this.logger.debug(
      `Streaming content for prompt: ${prompt.substring(0, 50)}...`,
    );

    // Check rate limit
    this.rateLimiter?.checkLimit();

    try {
      const result = await this.model.generateContentStream(prompt);

      for await (const chunk of result.stream) {
        const text = chunk.text();
        yield text;
      }

      this.logger.log('Content streaming completed');
    } catch (error) {
      this.handleError(error, 'streamContent');
      throw error;
    }
  }

  /**
   * Create a custom model with different parameters
   */
  private createCustomModel(
    options: Partial<Pick<GeminiOptions, 'temperature' | 'maxTokens'>>,
  ): GenerativeModel {
    return this.genAI.getGenerativeModel({
      model: this.options.model || DEFAULT_MODEL,
      generationConfig: {
        temperature:
          options.temperature ??
          this.options.temperature ??
          DEFAULT_TEMPERATURE,
        maxOutputTokens:
          options.maxTokens ?? this.options.maxTokens ?? DEFAULT_MAX_TOKENS,
        topP: this.options.topP ?? DEFAULT_TOP_P,
        topK: this.options.topK ?? DEFAULT_TOP_K,
      },
      safetySettings: this.options.safetySettings || DEFAULT_SAFETY_SETTINGS,
    });
  }

  /**
   * Parse JSON from Gemini response (handles markdown code blocks)
   */
  private parseJsonResponse<T>(content: string): T {
    try {
      // Remove markdown code blocks if present
      let jsonString = content.trim();

      if (jsonString.startsWith('```json')) {
        jsonString = jsonString
          .replace(/^```json\n?/, '')
          .replace(/\n?```$/, '');
      } else if (jsonString.startsWith('```')) {
        jsonString = jsonString.replace(/^```\n?/, '').replace(/\n?```$/, '');
      }

      // Try to parse directly first
      try {
        return JSON.parse(jsonString) as T;
      } catch (firstError) {
        // If parsing fails, try to find complete JSON within the string
        // This handles cases where the response is truncated or has extra text
        const jsonMatch = jsonString.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]) as T;
        }
        throw firstError;
      }
    } catch (error) {
      this.logger.error(
        `Failed to parse JSON response: ${content.substring(0, 500)}`,
      );
      this.logger.error(
        `Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new GeminiApiException(
        'Failed to parse AI response. The response was not valid JSON.',
      );
    }
  }

  /**
   * Handle and log errors
   */
  private handleError(error: unknown, operation: string): void {
    if (error instanceof Error) {
      this.logger.error(`Error in ${operation}: ${error.message}`, error.stack);
    } else {
      this.logger.error(`Unknown error in ${operation}`, error);
    }
  }

  /**
   * Get cache statistics (if caching is enabled)
   */
  getCacheStats() {
    return this.cache?.getStats() || { size: 0, entries: [] };
  }

  /**
   * Clear cache (if caching is enabled)
   */
  clearCache(): void {
    this.cache?.clear();
  }

  /**
   * Get rate limiter statistics (if rate limiting is enabled)
   */
  getRateLimitStats() {
    return {
      currentCount: this.rateLimiter?.getCurrentCount() || 0,
      maxRequests:
        this.options.requestsPerMinute || DEFAULT_REQUESTS_PER_MINUTE,
    };
  }
}
