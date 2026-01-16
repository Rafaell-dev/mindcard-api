import { Logger } from '@nestjs/common';
import { GeminiApiException } from 'src/exceptions/GeminiApiException';
import { GoogleAIFileManager, FileState } from '@google/generative-ai/server';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

/**
 * Helper for uploading large files to Gemini File API
 * Uses the official GoogleAIFileManager SDK
 */
export class FileUploader {
  private static readonly logger = new Logger(FileUploader.name);
  private fileManager: GoogleAIFileManager;

  constructor(apiKey: string) {
    this.fileManager = new GoogleAIFileManager(apiKey);
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

      // Upload using SDK
      const uploadResponse = await this.fileManager.uploadFile(tempFilePath, {
        mimeType,
        displayName: displayName || tempFileName,
      });

      FileUploader.logger.log(
        `File uploaded successfully. URI: ${uploadResponse.file.uri}`,
      );

      // Return file URI and name
      return {
        fileUri: uploadResponse.file.uri,
        fileName: uploadResponse.file.name,
      };
    } catch (error) {
      FileUploader.logger.error(
        `Failed to upload file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
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
        const fileMetadata = await this.fileManager.getFile(fileName);
        const state = fileMetadata.state;

        if (state === FileState.ACTIVE) {
          FileUploader.logger.log(`File is ready: ${fileName}`);
          return true;
        }

        if (state === FileState.FAILED) {
          throw new GeminiApiException(`File processing failed: ${fileName}`);
        }

        // Still processing, wait before next check
        FileUploader.logger.debug(
          `File still processing: ${fileName} (state: ${state})`,
        );
        await new Promise((resolve) => setTimeout(resolve, pollInterval));
      } catch (error) {
        if (error instanceof Error && error.message.includes('404')) {
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
      await this.fileManager.deleteFile(fileName);
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
