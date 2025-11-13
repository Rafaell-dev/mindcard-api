import { Injectable, Inject } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { Readable } from 'stream';

@Injectable()
export class R2Service {
  private readonly bucket: string;

  constructor(
    @Inject('R2_CLIENT') private readonly r2: S3Client,
    private readonly configService: ConfigService,
  ) {
    this.bucket = this.configService.get<string>('r2.bucketName') ?? '';
  }

  async uploadFile(
    key: string,
    buffer: Buffer,
    contentType: string,
  ): Promise<void> {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    });
    await this.r2.send(command);
  }

  async downloadFile(key: string): Promise<Readable> {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });
    const response = await this.r2.send(command);
    return response.Body as Readable;
  }

  async deleteFile(key: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });
    await this.r2.send(command);
  }

  async listFiles(prefix = ''): Promise<string[]> {
    const command = new ListObjectsV2Command({
      Bucket: this.bucket,
      Prefix: prefix,
    });
    const response = await this.r2.send(command);
    return response.Contents?.map((obj) => obj.Key!) || [];
  }

  async uploadFileFromMulter(
    file: Express.Multer.File,
    path?: string,
  ): Promise<string> {
    if (!file?.originalname || !file?.buffer || !file?.mimetype) {
      throw new Error('Invalid file object');
    }

    const timestamp = Date.now();
    const sanitizedFilename = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    const key = path
      ? `${path}/${timestamp}-${sanitizedFilename}`
      : `uploads/${timestamp}-${sanitizedFilename}`;

    await this.uploadFile(key, file.buffer, file.mimetype);

    const endpoint = this.configService.get<string>('r2.endpoint') ?? '';
    const publicUrl = `${endpoint}/${this.bucket}/${key}`;

    return publicUrl;
  }

  getPublicUrl(key: string): string {
    const endpoint = this.configService.get<string>('r2.endpoint') ?? '';
    return `${endpoint}/${this.bucket}/${key}`;
  }
}
