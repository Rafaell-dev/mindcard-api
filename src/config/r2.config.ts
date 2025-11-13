import { registerAs } from '@nestjs/config';
import { env } from './env.config';

export default registerAs('r2', () => ({
  endpoint: env.R2_ENDPOINT,
  accessKeyId: env.R2_ACCESS_KEY_ID,
  secretAccessKey: env.R2_SECRET_ACCESS_KEY,
  bucketName: env.R2_BUCKET_NAME,
  region: 'auto',
}));
