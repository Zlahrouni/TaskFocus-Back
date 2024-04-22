import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { usersProviders } from '../model/users.providers';
import { DatabaseModule } from '../infrastructure/database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [UserService, ...usersProviders],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule {}
