// dto/update-performance.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdatePerformanceDto {
  @ApiPropertyOptional({
    example: 'Thần Dương ABC',
    description: 'Tên mới của tiết mục',
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  name?: string;
}
