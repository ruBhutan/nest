import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  createPost(userId: string, title: string, content: string) {
    return this.prisma.post.create({
      data: {
        title,
        content,
        authorId: userId,
      },
    });
  }

  getAllPosts() {
    return this.prisma.post.findMany({ include: { author: true } });
  }
}
