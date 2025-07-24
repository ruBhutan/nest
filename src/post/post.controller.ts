import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { CreatePostDto } from './dto/post.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdatePostDto } from './dto/update-post.dto';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: CreatePostDto, @Req() req: RequestWithUser) {
    return this.postService.createPost(req.user.sub, body.title, body.content);
  }

  @Get()
  getAll() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @Get('user/:id')
  getPostsByUserId(@Param('id') id: string) {
    return this.postService.getPostsByUserId(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updatePost(
    @Param('id') id: string,
    @Body() body: UpdatePostDto,
    @Req() req: RequestWithUser,
  ) {
    return this.postService.updatePost(id, body.title, body.content);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deletePost(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.postService.deletePost(id);
  }
}
