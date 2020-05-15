import {
  CreateProjectDTO,
  UpdateProjectDTO,
} from './database/interfaces/project.dto';
import { ProjectsService } from './database/services/projects.service';
import { Project } from './database/interfaces/project';
import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Body,
  Put,
} from '@nestjs/common';

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

  @Put(':id')
  async updateProject(
    @Param('id') id: string,
    @Body() updateProjectDTO: UpdateProjectDTO,
  ) {
    const ok = await this.projectsService.update(id, updateProjectDTO);
    return { success: !!ok };
  }

  @Get(':id')
  async getProject(@Param('id') id: string): Promise<Project> {
    return await this.projectsService.find(id);
  }

  @Delete(':id')
  async deleteProject(@Param('id') id): Promise<boolean> {
    return await this.projectsService.delete(id);
  }
}
