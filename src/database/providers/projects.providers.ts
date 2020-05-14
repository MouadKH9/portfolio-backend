import { Connection } from 'mongoose';
import { ProjectSchema } from '../schemas/project.schema';
import constants from '../constants';

export const proectsProviders = [
  {
    provide: constants.PROJECT_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Project', ProjectSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
