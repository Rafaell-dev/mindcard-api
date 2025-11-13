import { BadRequestException } from '@nestjs/common';
import {
  SUPPORTED_MIME_TYPES,
  MAX_INLINE_FILE_SIZE,
  MAX_FILE_API_SIZE,
} from '../constants/gemini.constants';

/**
 * Validates file buffer and MIME type for Gemini API
 */
export class FileValidator {
  /**
   * Check if MIME type is supported
   * @param mimeType - File MIME type
   * @throws BadRequestException if MIME type is not supported
   */
  static validateMimeType(mimeType: string): void {
    const supportedTypes = SUPPORTED_MIME_TYPES as readonly string[];
    if (!supportedTypes.includes(mimeType)) {
      throw new BadRequestException(
        `Unsupported file type: ${mimeType}. Supported types: ${SUPPORTED_MIME_TYPES.join(', ')}`,
      );
    }
  }

  /**
   * Check if file size is within limits
   * @param buffer - File buffer
   * @throws BadRequestException if file is too large
   */
  static validateFileSize(buffer: Buffer): void {
    if (buffer.length > MAX_FILE_API_SIZE) {
      throw new BadRequestException(
        `File size exceeds maximum limit of ${MAX_FILE_API_SIZE / (1024 * 1024 * 1024)}GB`,
      );
    }
  }

  /**
   * Check if file should use File API (>20MB)
   * @param buffer - File buffer
   * @returns true if file should use File API
   */
  static shouldUseFileApi(buffer: Buffer): boolean {
    return buffer.length > MAX_INLINE_FILE_SIZE;
  }

  /**
   * Validate both MIME type and file size
   * @param buffer - File buffer
   * @param mimeType - File MIME type
   */
  static validate(buffer: Buffer, mimeType: string): void {
    this.validateMimeType(mimeType);
    this.validateFileSize(buffer);
  }

  /**
   * Check if file is an image
   * @param mimeType - File MIME type
   */
  static isImage(mimeType: string): boolean {
    return mimeType.startsWith('image/');
  }

  /**
   * Check if file is a PDF
   * @param mimeType - File MIME type
   */
  static isPDF(mimeType: string): boolean {
    return mimeType === 'application/pdf';
  }
}
