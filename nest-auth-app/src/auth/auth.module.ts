import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Auth0JwtStrategy } from './strategies/auth0-jwt.strategy';

import { AuthService } from './auth.service';

import { AuthController } from './auth.controller';

import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'auth0-jwt' })
  ],
  controllers: [AuthController],
  providers: [Auth0JwtStrategy, AuthService]
})
export class AuthModule {}
