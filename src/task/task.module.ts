import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { UserModule } from '../user/user.module';

@Module({
    providers: [TaskService],
    controllers: [TaskController],
    imports: [UserModule],
    exports: [],
})
export class TaskModule {}
