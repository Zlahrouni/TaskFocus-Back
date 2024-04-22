import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserDb } from '../model/userDb';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([UserDb])],
    providers: [UserService],
    controllers: [UserController],
    exports: [TypeOrmModule, UserService],
})
export class UserModule {}
