import { Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { IncomingMessage } from 'http';

interface IncomingMessageWithCorrelation extends IncomingMessage {
  correlationId?: string;
}

@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        level: process.env.LOG_LEVEL || 'info',
        transport:
          process.env.NODE_ENV !== 'production'
            ? {
                target: 'pino-pretty',
                options: {
                  colorize: true,
                  translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
                  ignore: 'pid,hostname',
                  singleLine: false,
                },
              }
            : undefined,
        customProps: (req: IncomingMessageWithCorrelation) => ({
          correlationId: req.correlationId,
        }),
        serializers: {
          req: (req: IncomingMessageWithCorrelation) => ({
            method: req.method,
            url: req.url,
            headers: {
              'user-agent': req.headers['user-agent'],
              'content-type': req.headers['content-type'],
            },
            remoteAddress: req.socket?.remoteAddress,
          }),
          res: (res: { statusCode: number }) => ({
            statusCode: res.statusCode,
          }),
        },
        autoLogging: false,
      },
    }),
  ],
  exports: [PinoLoggerModule],
})
export class LoggerModule {}
