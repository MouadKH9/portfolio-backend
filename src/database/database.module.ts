import { ProjectsService } from './services/projects.service';
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { projectsProviders } from './providers/projects.providers';

@Module({
  controllers: [],
  providers: [...databaseProviders, ...projectsProviders, ProjectsService],
  exports: [...databaseProviders, ProjectsService],
})
export class DatabaseModule {}
