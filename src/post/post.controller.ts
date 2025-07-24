import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: { title: string; content: string }, @Req() req: any) {
    return this.postService.createPost(
      req.user.userId,
      body.title,
      body.content,
    );
  }

  @Get()
  getAll() {
    return this.postService.getAllPosts();
  }
}
