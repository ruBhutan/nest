import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    create(body: CreatePostDto, req: RequestWithUser): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        createdAt: Date;
        title: string;
        content: string;
        authorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    getAll(): import(".prisma/client").Prisma.PrismaPromise<({
        author: {
            id: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        title: string;
        content: string;
        authorId: string;
    })[]>;
    getPostById(id: string): import(".prisma/client").Prisma.Prisma__PostClient<{
        author: {
            id: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        title: string;
        content: string;
        authorId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    getPostsByUserId(id: string): import(".prisma/client").Prisma.PrismaPromise<({
        author: {
            id: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        title: string;
        content: string;
        authorId: string;
    })[]>;
    updatePost(id: string, body: UpdatePostDto, req: RequestWithUser): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        createdAt: Date;
        title: string;
        content: string;
        authorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deletePost(id: string, req: RequestWithUser): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        createdAt: Date;
        title: string;
        content: string;
        authorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
