import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerformanceModule } from './modules/peformance/performance.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './modules/category/category.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ExceptionInterceptor } from './libs/interceptors/exception.interceptor';
import { TransformInterceptor } from './libs/interceptors/transform.interceptor';
import { LoggerModule } from './libs/ports/logger.module';
import { AuthModule } from './modules/auth/auth.module';

const interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: TransformInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ExceptionInterceptor,
  },
];

@Module({
  imports: [
    LoggerModule,
    PerformanceModule,
    PrismaModule,
    CategoryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [...interceptors, AppService],
})
export class AppModule {}
