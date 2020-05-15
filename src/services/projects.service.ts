import {
  CreateProjectDTO,
  UpdateProjectDTO,
} from './../interfaces/project.dto';
import { Project } from '../interfaces/project';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import constants from '../constants';

@Injectable()
export class ProjectsService {
  constructor(
    @Inject(constants.PROJECT_MODEL)
    private projectModel: Model<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDTO): Promise<Project> {
    const createdCat = new this.projectModel(createProjectDto);
    return createdCat.save();
  }

  async update(
    _id: string,
    updateProjectDto: UpdateProjectDTO,
  ): Promise<boolean> {
    return (await this.projectModel.updateOne({ _id }, updateProjectDto)).ok;
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }

  async find(_id: string): Promise<Project> {
    return this.projectModel.findOne({ _id }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const deletedCount = (await this.projectModel.deleteOne({ _id: id }).exec())
      .deletedCount;
    return deletedCount > 0;
  }
}
