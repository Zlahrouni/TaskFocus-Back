import {
    BadRequestException,
    ConflictException,
    Injectable,
} from '@nestjs/common';
import { UserDb } from '../model/userDb';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserDb)
        private usersRepository: Repository<UserDb>,
    ) {}

    async addUser(email: string): Promise<void> {
        const user = await this.usersRepository.findOne({
            where: { email: email },
        });

        if (user !== null) {
            throw new ConflictException('User with email already exists');
        }
        const newUser = this.usersRepository.create({ email });
        await this.usersRepository.save(newUser);
        console.log('new user created :' + newUser.email);
        return Promise.resolve();
    }

    async getUser(email: string): Promise<UserDb> {
        const user = await this.usersRepository.findOne({ where: { email } });
        console.log('user found :' + user?.email + ' expected :' + email);
        if (user === null) {
            throw new BadRequestException('User not found');
        }
        return user;
    }

    async resetData() {
        await this.usersRepository.clear();
    }

    async getUserById(id: string) {
        return await this.usersRepository.findOne({ where: { id } });
    }
}
