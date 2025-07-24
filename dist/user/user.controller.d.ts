import { UserService } from './user.service';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(req: RequestWithUser): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        posts: {
            id: string;
            title: string;
        }[];
    }>;
    getFeed(req: RequestWithUser): Promise<({
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
