import { Logger } from '@nestjs/common';

/**
 * Retry handler with exponential backoff
 */
export class RetryHandler {
  private static readonly logger = new Logger(RetryHandler.name);

  /**
   * Execute function with retry logic
   * @param fn - Function to execute
   * @param maxRetries - Maximum number of retry attempts
   * @param initialDelay - Initial delay in milliseconds
   * @param operation - Operation name for logging
   */
  static async execute<T>(
    fn: () => Promise<T>,
    maxRetries: number,
    initialDelay: number,
    operation: string,
  ): Promise<T> {
    let lastError: Error;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        if (attempt > 0) {
          this.logger.log(
            `Retry attempt ${attempt}/${maxRetries} for ${operation}`,
          );
        }

        return await fn();
      } catch (error) {
        lastError = error as Error;

        // Don't retry on certain error types
        if (this.isNonRetryableError(error)) {
          this.logger.error(
            `Non-retryable error in ${operation}: ${lastError.message}`,
          );
          throw error;
        }

        if (attempt < maxRetries) {
          const delay = this.calculateDelay(attempt, initialDelay);
          this.logger.warn(
            `${operation} failed (attempt ${attempt + 1}/${maxRetries + 1}). ` +
              `Retrying in ${delay}ms... Error: ${lastError.message}`,
          );
          await this.sleep(delay);
        }
      }
    }

    this.logger.error(
      `${operation} failed after ${maxRetries + 1} attempts: ${lastError!.message}`,
    );
    throw lastError!;
  }

  /**
   * Calculate exponential backoff delay
   */
  private static calculateDelay(attempt: number, initialDelay: number): number {
    const exponentialDelay = initialDelay * Math.pow(2, attempt);
    const jitter = Math.random() * 1000; // Add jitter to prevent thundering herd
    return Math.min(exponentialDelay + jitter, 30000); // Max 30 seconds
  }

  /**
   * Sleep for specified milliseconds
   */
  private static sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Check if error should not be retried
   */
  private static isNonRetryableError(error: unknown): boolean {
    // Don't retry on validation errors, auth errors, etc.
    const nonRetryableMessages = [
      'Invalid API key',
      'Unsupported file type',
      'File size exceeds',
      'Bad request',
    ];

    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase();
      return nonRetryableMessages.some((msg) =>
        errorMessage.includes(msg.toLowerCase()),
      );
    }

    return false;
  }
}
