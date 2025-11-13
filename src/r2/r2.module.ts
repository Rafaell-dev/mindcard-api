import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import r2Config from '../config/r2.config';
import { S3Client } from '@aws-sdk/client-s3';
import { R2Service } from './r2.service';

@Module({
  imports: [ConfigModule.forFeature(r2Config)],
  providers: [
    R2Service,
    {
      provide: 'R2_CLIENT',
      useFactory: (configService: ConfigService) => {
        const r2Config = configService.get<{
          region: string;
          endpoint: string;
          accessKeyId: string;
          secretAccessKey: string;
          bucketName: string;
        }>('r2');

        if (!r2Config) {
          throw new Error('R2 configuration not found');
        }

        return new S3Client({
          region: r2Config.region,
          endpoint: r2Config.endpoint,
          credentials: {
            accessKeyId: r2Config.accessKeyId,
            secretAccessKey: r2Config.secretAccessKey,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [R2Service],
})
export class R2Module {}
