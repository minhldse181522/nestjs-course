import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'username', description: 'Tên đăng nhập' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  userName: string;

  @ApiProperty({ example: 'password', description: 'Mật khẩu' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  password: string;
}
