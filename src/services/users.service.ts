import { Project } from '../interfaces/project';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import constants from '../constants';
import { User } from '../interfaces/user';

@Injectable()
export class UsersService {
  constructor(
    @Inject(constants.USER_MODEL)
    private userModel: Model<User>,
  ) {}

  async find(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }
}
