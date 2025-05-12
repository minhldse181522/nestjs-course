import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Tìm người dùng bằng username
   */
  async findByUsername(userName: string) {
    return this.prisma.user.findUnique({
      where: {
        userName,
      },
      select: {
        id: true,
        userName: true,
        password: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
      },
    });
  }

  /**
   * Tạo người dùng mới
   */
  async createUser(data: {
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }) {
    return this.prisma.user.create({
      data,
    });
  }

  /**
   * Tìm người dùng theo ID
   */
  async findById(id: number | string | bigint) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: BigInt(id),
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
}
