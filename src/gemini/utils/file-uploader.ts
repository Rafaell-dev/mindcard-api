import { Logger } from '@nestjs/common';
import { GeminiApiException } from 'src/exceptions/GeminiApiException';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import FormData from 'form-data';
import axios from 'axios';

interface FileUploadResponse {
  file: {
    name: string;
    displayName: string;
    mimeType: string;
    sizeBytes: string;
    createTime: string;
    updateTime: string;
    expirationTime: string;
    sha256Hash: string;
    uri: string;
    state: 'PROCESSING' | 'ACTIVE' | 'FAILED';
  };
}

interface FileMetadata {
  name: string;
  displayName: string;
  mimeType: string;
  sizeBytes: string;
  createTime: string;
  updateTime: string;
  expirationTime: string;
  sha256Hash: string;
  uri: string;
  state: 'PROCESSING' | 'ACTIVE' | 'FAILED';
}

/**
 * Helper for uploading large files to Gemini File API
 * Uses REST API directly as the SDK doesn't fully support File API yet
 */
export class FileUploader {
  private static readonly logger = new Logger(FileUploader.name);
  private apiKey: string;
  private readonly baseUrl = 'https://generativelanguage.googleapis.com/v1beta';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Upload a file to Gemini File API and return file URI
   * @param buffer - File buffer
   * @param mimeType - File MIME type
   * @param displayName - Optional display name for the file
   * @returns File URI for use in generation
   */
  async uploadFile(
    buffer: Buffer,
    mimeType: string,
    displayName?: string,
  ): Promise<{ fileUri: string; fileName: string }> {
    FileUploader.logger.debug(
      `Uploading file to Gemini File API: ${mimeType}, size: ${buffer.length} bytes`,
    );

    // Create temporary file
    const tempDir = os.tmpdir();
    const tempFileName = `gemini-upload-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const extension = this.getExtensionFromMimeType(mimeType);
    const tempFilePath = path.join(tempDir, `${tempFileName}${extension}`);

    try {
      // Write buffer to temp file
      fs.writeFileSync(tempFilePath, buffer);

      // Create form data
      const formData = new FormData();
      formData.append('file', fs.createReadStream(tempFilePath), {
        filename: displayName || tempFileName,
        contentType: mimeType,
      });

      // Upload to Gemini File API
      const response = await axios.post<FileUploadResponse>(
        `${this.baseUrl}/files?key=${this.apiKey}`,
        formData,
        {
          headers: {
            ...formData.getHeaders(),
          },
          maxBodyLength: Infinity,
          maxContentLength: Infinity,
        },
      );

      FileUploader.logger.log(
        `File uploaded successfully. URI: ${response.data.file.uri}`,
      );

      // Return file URI and name
      return {
        fileUri: response.data.file.uri,
        fileName: response.data.file.name,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        FileUploader.logger.error(
          `Failed to upload file: ${error.response?.data?.error?.message || error.message}`,
        );
        throw new GeminiApiException(
          `Failed to upload file: ${error.response?.data?.error?.message || error.message}`,
        );
      }
      throw new GeminiApiException(
        `Failed to upload file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    } finally {
      // Clean up temp file
      try {
        if (fs.existsSync(tempFilePath)) {
          fs.unlinkSync(tempFilePath);
          FileUploader.logger.debug(`Cleaned up temp file: ${tempFilePath}`);
        }
      } catch (cleanupError) {
        FileUploader.logger.warn(
          `Failed to clean up temp file: ${cleanupError instanceof Error ? cleanupError.message : 'Unknown error'}`,
        );
      }
    }
  }

  /**
   * Wait for file to be processed by Gemini
   * @param fileName - File name returned from upload
   * @param maxWaitTime - Maximum time to wait in milliseconds (default: 120s)
   * @returns true if file is ready
   */
  async waitForFileProcessing(
    fileName: string,
    maxWaitTime: number = 120000,
  ): Promise<boolean> {
    const startTime = Date.now();
    const pollInterval = 3000; // Check every 3 seconds

    FileUploader.logger.debug(`Waiting for file processing: ${fileName}`);

    while (Date.now() - startTime < maxWaitTime) {
      try {
        const response = await axios.get<FileMetadata>(
          `${this.baseUrl}/${fileName}?key=${this.apiKey}`,
        );

        const state = response.data.state;

        if (state === 'ACTIVE') {
          FileUploader.logger.log(`File is ready: ${fileName}`);
          return true;
        }

        if (state === 'FAILED') {
          throw new GeminiApiException(`File processing failed: ${fileName}`);
        }

        // Still processing, wait before next check
        FileUploader.logger.debug(
          `File still processing: ${fileName} (state: ${state})`,
        );
        await new Promise((resolve) => setTimeout(resolve, pollInterval));
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          // File not found yet, continue waiting
          await new Promise((resolve) => setTimeout(resolve, pollInterval));
          continue;
        }

        FileUploader.logger.error(
          `Error checking file status: ${error instanceof Error ? error.message : 'Unknown error'}`,
        );
        throw error;
      }
    }

    throw new GeminiApiException(
      `File processing timeout: ${fileName} (waited ${maxWaitTime}ms)`,
    );
  }

  /**
   * Delete a file from Gemini File API
   * @param fileName - File name to delete
   */
  async deleteFile(fileName: string): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}/${fileName}?key=${this.apiKey}`);
      FileUploader.logger.log(`File deleted successfully: ${fileName}`);
    } catch (error) {
      FileUploader.logger.warn(
        `Failed to delete file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      // Don't throw - deletion failure shouldn't break the flow
    }
  }

  /**
   * Get file extension from MIME type
   */
  private getExtensionFromMimeType(mimeType: string): string {
    const mimeToExt: Record<string, string> = {
      'application/pdf': '.pdf',
      'image/png': '.png',
      'image/jpeg': '.jpg',
      'image/jpg': '.jpg',
      'image/webp': '.webp',
    };

    return mimeToExt[mimeType] || '';
  }
}
