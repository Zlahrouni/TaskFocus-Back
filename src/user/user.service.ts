import {
    BadRequestException,
    ConflictException,
    Inject,
    Injectable,
} from '@nestjs/common';
import { UserDb } from '../model/userDb';

@Injectable()
export class UserService {
    constructor() {}

    async addUser(email: string): Promise<void> {
        const user = await UserDb.findOne({ where: { email } });
        if (user !== null) {
            throw new ConflictException('User with email already exists');
        }
        UserDb.create({ email }).then((r) => console.log('user created' + r));
        return Promise.resolve();
    }

    async getUser(email: string): Promise<UserDb> {
        const user = await UserDb.findOne({ where: { email } });
        console.log('user found :' + user?.email + ' expected :' + email);
        if (user === null) {
            throw new BadRequestException('User not found');
        }
        return user;
    }

    async resetData() {
        await UserDb.destroy({ where: {} });
    }

    getUserById(userId: string) {
        return UserDb.findByPk(userId);
    }
}
