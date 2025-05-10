import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Best Performance', description: 'Tên hạng mục' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  categoryName: string;

  @ApiProperty({
    example: 'This is the best performance category',
    description: 'Mô tả hạng mục',
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;
}
