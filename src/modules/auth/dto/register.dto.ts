import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'utest', description: 'Tên đăng nhập' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  userName: string;

  @ApiProperty({ example: '123', description: 'Mật khẩu' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  password: string;

  @ApiProperty({ example: 'Thần', description: 'Tên' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  firstName: string;

  @ApiProperty({ example: 'Dương', description: 'Họ' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  lastName: string;

  @ApiProperty({ example: 'thanduong@example.com', description: 'Email' })
  @IsNotEmpty()
  @MaxLength(50)
  email: string;

  @ApiProperty({ example: '0912345678', description: 'Số điện thoại' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  phone: string;
}
