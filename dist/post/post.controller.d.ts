import { PostService } from './post.service';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    create(body: {
        title: string;
        content: string;
    }, req: any): import(".prisma/client").Prisma.Prisma__PostClient<{
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
}
