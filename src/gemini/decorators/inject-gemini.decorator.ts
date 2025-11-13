import { Inject } from '@nestjs/common';
import { GEMINI_OPTIONS } from '../constants/gemini.constants';

/**
 * Decorator to inject Gemini options
 *
 * @example
 * ```typescript
 * constructor(@InjectGemini() private options: GeminiOptions) {}
 * ```
 */
export const InjectGemini = () => Inject(GEMINI_OPTIONS);
