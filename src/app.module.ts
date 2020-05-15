import { AuthController } from './controllers/auth.controller';
import { Module } from '@nestjs/common';
import { ProjectController } from './controllers/projects.controller';
import { DatabaseModule } from './database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [ProjectController, AuthController],
})
export class AppModule {}
