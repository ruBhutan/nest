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

  getPostById(postId: string) {
    return this.prisma.post.findUnique({
      where: { id: postId },
      include: { author: true },
    });
  }

  getPostsByUserId(userId: string) {
    return this.prisma.post.findMany({
      where: { authorId: userId },
      include: { author: true },
    });
  }

  updatePost(postId: string, title: string, content: string) {
    return this.prisma.post.update({
      where: { id: postId },
      data: {
        title,
        content,
      },
    });
  }

  deletePost(postId: string) {
    return this.prisma.post.delete({ where: { id: postId } });
  }
}
