import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreatePerformanceDto } from './dto/create-performance.dto';
import { UpdatePerformanceDto } from './dto/update-performance.dto';

@ApiTags('Performance')
@Controller('performance')
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  @Get('')
  async getAllPerformances() {
    return await this.performanceService.getPerformanceService();
  }

  @Get(':categoryId')
  async getPerformancesByCategory(@Param('categoryId') categoryId: number) {
    return await this.performanceService.getPerformancesByCategoryService(
      categoryId,
    );
  }

  @Post('')
  @ApiBody({ type: [CreatePerformanceDto] })
  async createPerformances(@Body() performances: CreatePerformanceDto[]) {
    return await this.performanceService.createPerformanceService(performances);
  }

  @Put(':id')
  async updatePerformance(
    @Param('id') id: string,
    @Body() body: UpdatePerformanceDto,
  ) {
    return await this.performanceService.updatePerformanceService(
      id,
      body.name,
    );
  }

  @Delete(':id')
  async deletePerformance(@Param('id') id: string) {
    return await this.performanceService.deletePerformanceService(id);
  }
}
