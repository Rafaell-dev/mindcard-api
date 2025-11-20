import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request, Response } from 'express';
import { maskSensitiveData } from '../utils/sensitive-data-masker';
import { randomUUID } from 'crypto';

// Extend Express Request to include correlationId
interface RequestWithCorrelation extends Request {
  correlationId?: string;
}

@Injectable()
export class HttpLoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');
  private readonly enableHttpLogging =
    process.env.ENABLE_HTTP_LOGGING !== 'false';
  private readonly maskSensitiveDataFlag =
    process.env.MASK_SENSITIVE_DATA !== 'false';
  private readonly logLevel = process.env.LOG_LEVEL || 'info';

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    if (!this.enableHttpLogging) {
      return next.handle();
    }

    const ctx = context.switchToHttp();
    const request = ctx.getRequest<RequestWithCorrelation>();
    const response = ctx.getResponse<Response>();

    // Generate correlation ID
    const correlationId = randomUUID();
    request.correlationId = correlationId;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { method, url, headers, body, query, ip } = request;
    const userAgent = headers['user-agent'] || 'unknown';
    const startTime = Date.now();

    // Log request (only in debug mode to avoid noise)
    if (this.logLevel === 'debug') {
      const requestLog = {
        correlationId,
        type: 'REQUEST',
        method,
        url,
        ip,
        userAgent,
        query: Object.keys(query as object).length > 0 ? query : undefined,
        body:
          body && Object.keys(body as object).length > 0
            ? this.maskSensitiveDataFlag
              ? maskSensitiveData(body)
              : body
            : undefined,
        headers: {
          'content-type': headers['content-type'],
          accept: headers['accept'],
        },
      };
      this.logger.debug(requestLog);
    }

    return next.handle().pipe(
      tap({
        next: () => {
          const latency = Date.now() - startTime;
          const statusCode = response.statusCode;

          const responseLog = {
            correlationId,
            type: 'RESPONSE',
            method,
            path: url,
            statusCode,
            latency: `${latency}ms`,
            ip,
            userAgent,
          };

          // Log based on status code
          if (statusCode >= 500) {
            this.logger.error(responseLog);
          } else if (statusCode >= 400) {
            this.logger.warn(responseLog);
          } else {
            this.logger.log(responseLog);
          }
        },
        error: (err: Error) => {
          const latency = Date.now() - startTime;
          const statusCode = response.statusCode || 500;

          this.logger.error({
            correlationId,
            type: 'ERROR',
            method,
            path: url,
            statusCode,
            latency: `${latency}ms`,
            ip,
            userAgent,
            error: err.message,
            stack: this.logLevel === 'debug' ? err.stack : undefined,
          });
        },
      }),
    );
  }
}
