import { ProjectsService } from './database/services/projects.service';
import { Project } from './database/interfaces/project';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('projects')
export class AppController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('all')
  async getProjects(): Promise<Project[]> {
    return await this.projectsService.findAll();
  }

  @Get(':id')
  async getProject(@Param() params): Promise<Project> {
    return await this.projectsService.find(params.id);
  }
}
