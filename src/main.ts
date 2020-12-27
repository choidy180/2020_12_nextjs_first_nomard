import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사 파이프라인
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // 유효성 검사 타입 자동변환 ( 편함 ..)
      transform: true,
    }));
  await app.listen(3000);
}
bootstrap();
