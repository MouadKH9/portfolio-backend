import { CreateProjectDTO, UpdateProjectDTO } from '../interfaces/project.dto';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../interfaces/project';
import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Body,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectsService: ProjectsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('all')
  async getProjects(): Promise<Project[]> {
    return await this.projectsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createProject(@Body() createProjectDTO: CreateProjectDTO) {
    const project = await this.projectsService.create(createProjectDTO);
    return project;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateProject(
    @Param('id') id: string,
    @Body() updateProjectDTO: UpdateProjectDTO,
  ) {
    const ok = await this.projectsService.update(id, updateProjectDTO);
    return { success: !!ok };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getProject(@Param('id') id: string): Promise<Project> {
    return await this.projectsService.find(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteProject(@Param('id') id): Promise<boolean> {
    return await this.projectsService.delete(id);
  }
}
