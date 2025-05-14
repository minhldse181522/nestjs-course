import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './libs/socket/redis-io-adapter';

function serializeBigInt(obj) {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? Number(value) : value,
    ),
  );
}

function setupSwagger(nestApp: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Voting API Documentation')
    .setDescription('The Voting API documentation with NestJS')
    .setVersion('1.0')
    .addBearerAuth();

  const document = SwaggerModule.createDocument(nestApp, options.build());
  const serializedDocument = serializeBigInt(document);
  SwaggerModule.setup('docs', nestApp, serializedDocument, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      displayOperationId: true,
      displayRequestDuration: true,
      filter: true,
    },
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {
    const redisIoAdapter = new RedisIoAdapter(app);
    await redisIoAdapter.connectToRedis();
    app.useWebSocketAdapter(redisIoAdapter);
  } catch (error) {
    console.error('Error connecting to Redis:', error);
  }

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.enableShutdownHooks();

  setupSwagger(app);

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
