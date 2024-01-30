import {
  AllExceptionsFilter,
  HttpExceptionFilter,
  TransformInterceptor,
} from '@app/common';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { generateDocument } from './doc';
import { UserCenterModule } from './user-center.module';

async function bootstrap() {
  const app = await NestFactory.create(UserCenterModule);

  // 统一响应体格式
  app.useGlobalInterceptors(new TransformInterceptor());

  // 异常过滤器
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  // 接口版本化管理
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // 创建文档
  generateDocument(app);

  await app.listen(3000);
}
bootstrap();
