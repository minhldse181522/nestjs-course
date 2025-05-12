import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePerformanceDto {
  @ApiProperty({ example: 'Thần Dương', description: 'Tên tiết mục' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}
