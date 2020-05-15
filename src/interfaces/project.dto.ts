export interface CreateProjectDTO {
  name: string;
  description: string;
  tags: string[];
  date: Date;
}
export interface UpdateProjectDTO {
  name?: string;
  description?: string;
  tags?: string[];
  date?: Date;
}
