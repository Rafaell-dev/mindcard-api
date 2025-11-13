import { DynamicModule, Module, Global } from '@nestjs/common';
import type {
  GeminiOptions,
  GeminiAsyncOptions,
} from './interfaces/gemini-options.interface';
import { GeminiService } from './gemini.service';
import { ResponseCache } from './cache/response-cache';
import { GEMINI_OPTIONS } from './constants/gemini.constants';

/**
 * Dynamic module for Google Gemini AI integration
 *
 * @example Synchronous configuration:
 * ```typescript
 * GeminiModule.forRoot({
 *   apiKey: 'your-api-key',
 *   model: 'gemini-1.5-flash',
 *   temperature: 0.7
 * })
 * ```
 *
 * @example Async configuration with ConfigService:
 * ```typescript
 * GeminiModule.forRootAsync({
 *   inject: [ConfigService],
 *   useFactory: (config: ConfigService) => ({
 *     apiKey: config.get('GEMINI_API_KEY'),
 *     model: 'gemini-1.5-flash',
 *     enableCache: true
 *   })
 * })
 * ```
 */
@Global()
@Module({})
export class GeminiModule {
  /**
   * Register module synchronously with static configuration
   */
  static forRoot(options: GeminiOptions): DynamicModule {
    return {
      module: GeminiModule,
      providers: [
        {
          provide: GEMINI_OPTIONS,
          useValue: options,
        },
        GeminiService,
        ResponseCache,
      ],
      exports: [GeminiService],
    };
  }

  /**
   * Register module asynchronously with dynamic configuration
   * Useful for loading config from ConfigService or other async sources
   */
  static forRootAsync(options: GeminiAsyncOptions): DynamicModule {
    return {
      module: GeminiModule,
      providers: [
        {
          provide: GEMINI_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        GeminiService,
        ResponseCache,
      ],
      exports: [GeminiService],
    };
  }
}
