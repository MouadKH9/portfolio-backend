import { UserSchema } from './../schemas/user.schema';
import { Connection } from 'mongoose';
import constants from '../constants';

export const usersProviders = [
  {
    provide: constants.USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
