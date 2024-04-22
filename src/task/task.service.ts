import { Injectable } from '@nestjs/common';
import { TaskDb } from '../model/taskDb';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskDb)
        private tasksRepository: Repository<TaskDb>,
    ) {}

    async addTask(
        name: string,
        userId: string,
        priority: number,
    ): Promise<TaskDb> {
        const task = this.tasksRepository.create({ userId, name, priority });
        return await this.tasksRepository.save(task);
    }

    async getTaskByName(name: string): Promise<TaskDb> {
        return await this.tasksRepository.findOne({ where: { name } });
    }

    getUserTasks(userId: string): Promise<TaskDb[]> {
        return this.tasksRepository.find({ where: { userId } });
    }

    async resetData() {
        await this.tasksRepository.clear();
    }
}
