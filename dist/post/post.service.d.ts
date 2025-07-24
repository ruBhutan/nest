import { PrismaService } from '../prisma/prisma.service';
export declare class PostService {
    private prisma;
    constructor(prisma: PrismaService);
    createPost(userId: string, title: string, content: string): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        createdAt: Date;
        title: string;
        content: string;
        authorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    getAllPosts(): import(".prisma/client").Prisma.PrismaPromise<({
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
    getPostById(postId: string): import(".prisma/client").Prisma.Prisma__PostClient<{
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
    getPostsByUserId(userId: string): import(".prisma/client").Prisma.PrismaPromise<({
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
    updatePost(postId: string, title: string, content: string): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        createdAt: Date;
        title: string;
        content: string;
        authorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deletePost(postId: string): import(".prisma/client").Prisma.Prisma__PostClient<{
        id: string;
        createdAt: Date;
        title: string;
        content: string;
        authorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
