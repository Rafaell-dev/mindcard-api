import { Injectable, Logger } from '@nestjs/common';
import { GeminiRateLimitException } from 'src/exceptions/GeminiRateLimitException';

/**
 * Simple in-memory rate limiter using sliding window
 */
@Injectable()
export class RateLimiter {
  private readonly logger = new Logger(RateLimiter.name);
  private requests: number[] = [];
  private readonly windowMs = 60000; // 1 minute

  constructor(private readonly maxRequests: number) {}

  /**
   * Check if request is allowed under rate limit
   * @throws GeminiRateLimitException if rate limit exceeded
   */
  checkLimit(): void {
    const now = Date.now();

    // Remove requests outside the time window
    this.requests = this.requests.filter(
      (timestamp) => now - timestamp < this.windowMs,
    );

    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = this.requests[0];
      const retryAfter = Math.ceil(
        (oldestRequest + this.windowMs - now) / 1000,
      );

      this.logger.warn(
        `Rate limit exceeded. Current: ${this.requests.length}/${this.maxRequests}`,
      );

      throw new GeminiRateLimitException(retryAfter);
    }

    this.requests.push(now);
  }

  /**
   * Get current request count in window
   */
  getCurrentCount(): number {
    const now = Date.now();
    this.requests = this.requests.filter(
      (timestamp) => now - timestamp < this.windowMs,
    );
    return this.requests.length;
  }

  /**
   * Reset the rate limiter
   */
  reset(): void {
    this.requests = [];
  }
}
