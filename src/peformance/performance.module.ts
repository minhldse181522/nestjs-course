import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PerformanceController } from './performance.controller';
import { PerformanceService } from './performance.service';
import { CategoryService } from 'src/category/category.service';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [PrismaModule, CategoryModule],
  providers: [PerformanceService, CategoryService],
  controllers: [PerformanceController],
})
export class PerformanceModule {}
