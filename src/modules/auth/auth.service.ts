import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Validate user credentials (username and password)
   */
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    const { password: _, ...result } = user;
    return result;
  }

  /**
   * Generate JWT access & refresh tokens after successful login
   */
  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id.toString(),
      email: user.email,
    };

    return {
      accessToken: this.jwtService.sign(payload, { expiresIn: '1h' }),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
      user: {
        id: user.id.toString(),
        userName: user.userName,
        fullName: user.firstName + ' ' + user.lastName,
        email: user.email,
        phone: user.phone,
      },
    };
  }

  async register(dto: RegisterDto) {
    const existing = await this.userService.findByUsername(dto.userName);
    if (existing) {
      throw new Error('Username already exists');
    }

    // hash password
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = await this.userService.createUser({
      ...dto,
      password: hashedPassword,
    });

    return {
      ...user,
      id: user.id.toString(),
      password: undefined,
    };
  }
}
