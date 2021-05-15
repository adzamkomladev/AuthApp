import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';

import { ManagementClient } from 'auth0';

import { AuthService } from './auth.service';

@Controller('auth')
@UseGuards(AuthGuard())
export class AuthController {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService
  ) {}

  @Get('me')
  async getOrCreate(@Req() request) {
    const authZero = new ManagementClient({
      domain: this.configService.get<string>('auth.auth0.domain'),
      clientId: this.configService.get<string>('auth.auth0.client.id'),
      clientSecret: this.configService.get<string>('auth.auth0.client.secret'),
      scope: 'read:users update:users',
    });

    const user = await authZero.getUser({ id: request.user.sub });

    return this.authService.getOrCreate(user);
  }
}
