import { Injectable } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
