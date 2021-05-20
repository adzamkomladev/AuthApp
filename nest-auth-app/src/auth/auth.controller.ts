import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';

@Controller('auth')
@UseGuards(AuthGuard('auth0-jwt'))
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('me')
  async getOrCreate(@Query() authUserDto: AuthUserDto) {
    return this.authService.getOrCreate(authUserDto);
  }
}
