import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { UserModule } from '../user/user.module';
import { TaskDb } from '../model/taskDb';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    providers: [TaskService],
    controllers: [TaskController],
    imports: [TypeOrmModule.forFeature([TaskDb]), UserModule],
    exports: [],
})
export class TaskModule {}
