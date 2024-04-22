import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Task } from '../model/task';
import { TaskDb } from '../model/taskDb';

@Injectable()
export class TaskService {
    constructor(private readonly userService: UserService) {}

    async addTask(
        name: string,
        userId: string,
        priority: number,
    ): Promise<void> {
        await TaskDb.create({ name, userId, priority }).then((r) =>
            console.log('task created' + r),
        );
        return Promise.resolve();
    }

    async getTaskByName(name: string): Promise<TaskDb> {
        return await TaskDb.findOne({ where: { name } });
    }

    getUserTasks(userId: string): Promise<TaskDb[]> {
        return TaskDb.findAll({ where: { userId } });
    }

    async resetData() {
        await TaskDb.destroy({ where: {} });
    }
}
