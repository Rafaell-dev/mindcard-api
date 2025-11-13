import { Injectable, Logger } from '@nestjs/common';
import * as crypto from 'crypto';

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

/**
 * Simple in-memory cache for Gemini API responses
 */
@Injectable()
export class ResponseCache {
  private readonly logger = new Logger(ResponseCache.name);
  private cache = new Map<string, CacheEntry<any>>();

  /**
   * Generate cache key from input parameters
   */
  private generateKey(...args: any[]): string {
    const hash = crypto.createHash('sha256');
    hash.update(JSON.stringify(args));
    return hash.digest('hex');
  }

  /**
   * Get cached response if available and not expired
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key);

    if (!entry) {
      return null;
    }

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl * 1000) {
      this.logger.debug(`Cache expired for key: ${key.substring(0, 16)}...`);
      this.cache.delete(key);
      return null;
    }

    this.logger.debug(`Cache hit for key: ${key.substring(0, 16)}...`);
    return entry.data;
  }

  /**
   * Store response in cache
   */
  set<T>(key: string, data: T, ttl: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
    this.logger.debug(`Cached response for key: ${key.substring(0, 16)}...`);
  }

  /**
   * Generate key and get cached response
   */
  getCached<T>(...args: any[]): T | null {
    const key = this.generateKey(...args);
    return this.get<T>(key);
  }

  /**
   * Generate key and cache response
   */
  setCached<T>(data: T, ttl: number, ...args: any[]): void {
    const key = this.generateKey(...args);
    this.set(key, data, ttl);
  }

  /**
   * Clear all cached entries
   */
  clear(): void {
    this.cache.clear();
    this.logger.log('Cache cleared');
  }

  /**
   * Get cache statistics
   */
  getStats() {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.entries()).map(([key, entry]) => ({
        key: key.substring(0, 16) + '...',
        age: Math.floor((Date.now() - entry.timestamp) / 1000),
        ttl: entry.ttl,
      })),
    };
  }

  /**
   * Cleanup expired entries (should be called periodically)
   */
  cleanup(): void {
    const now = Date.now();
    let cleaned = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl * 1000) {
        this.cache.delete(key);
        cleaned++;
      }
    }

    if (cleaned > 0) {
      this.logger.debug(`Cleaned up ${cleaned} expired cache entries`);
    }
  }
}
