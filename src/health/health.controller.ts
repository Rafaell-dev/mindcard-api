import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsPublic } from '../modules/auth/decorators/isPublicDecorator';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  @Get()
  @IsPublic()
  @ApiOperation({ summary: 'Health check endpoint' })
  check() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
