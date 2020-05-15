import { UsersService } from './services/users.service';
import { ProjectsService } from './services/projects.service';
import { Module } from '@nestjs/common';
import { databaseProviders } from './providers/database.providers';
import { projectsProviders } from './providers/projects.providers';
import { usersProviders } from './providers/users.providers';

@Module({
  controllers: [],
  providers: [
    ...databaseProviders,
    ...projectsProviders,
    ...usersProviders,
    ProjectsService,
    UsersService,
  ],
  exports: [...databaseProviders, ProjectsService, UsersService],
})
export class DatabaseModule {}
