import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerformanceModule } from './peformance/performance.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [PerformanceModule, PrismaModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
