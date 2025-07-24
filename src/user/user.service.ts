import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        posts: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  }

  async getProfile(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        posts: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  }

  async getFeed(userId: string) {
    return this.prisma.post.findMany({
      where: {
        author: {
          id: userId,
        },
      },
      include: {
        author: true,
      },
    });
  }
}
