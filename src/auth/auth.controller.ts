import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('signup')
  signup(@Body() body: { email: string; password: string }) {
    return this.auth.signup(body.email, body.password);
  }

  @Post('signin')
  signin(@Body() body: { email: string; password: string }) {
    return this.auth.signin(body.email, body.password);
  }
}
