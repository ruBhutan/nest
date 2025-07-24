import { AuthService } from './auth.service';
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
    signup(body: {
        email: string;
        password: string;
    }): Promise<{
        id: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    signin(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
}
