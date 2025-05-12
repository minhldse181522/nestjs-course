import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateCategoryDto {
  @ApiPropertyOptional({
    example: 'Best Performance',
    description: 'Tên hạng mục',
  })
  @IsString()
  @IsOptional()
  @MaxLength(50)
  categoryName?: string;

  @ApiPropertyOptional({
    example: 'This is the best performance category',
    description: 'Mô tả hạng mục',
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;
}
