import { CreateProjectDTO } from './database/interfaces/create_project.dto';
import { ProjectsService } from './database/services/projects.service';
import { Project } from './database/interfaces/project';
import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';

@Controller('projects')
export class AppController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('all')
  async getProjects(): Promise<Project[]> {
    return await this.projectsService.findAll();
  }

  @Post()
  async createProject(@Body() createProjectDTO: CreateProjectDTO) {
    const project = await this.projectsService.create(createProjectDTO);
    return project;
  }

  @Get(':id')
  async getProject(@Param('id') id): Promise<Project> {
    return await this.projectsService.find(id);
  }

  @Delete(':id')
  async deleteProject(@Param('id') id): Promise<boolean> {
    return await this.projectsService.delete(id);
  }
}
