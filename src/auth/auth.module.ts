import { JwtStrategy } from './jwt.strategy';
import { DatabaseModule } from './../database.module';
import { LocalStrategy } from './local.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import constants from 'src/constants';

@Module({
  imports: [
    PassportModule,
    DatabaseModule,
    JwtModule.register({
      secret: constants.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
