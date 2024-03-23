import {
    BadRequestException,
    ConflictException,
    Injectable,
} from '@nestjs/common';
import { User } from '../model/user';

@Injectable()
export class UserService {
    users: User[] = [];
    constructor() {}

    addUser(email: string): Promise<void> {
        if (this.users.find((user) => user.email === email)) {
            throw new ConflictException('User with email already exists');
        }
        const user = new User(this.users.length.toString(), email);
        this.users.push(user);

        return Promise.resolve();
    }

    getUser(email: string): Promise<unknown> {
        const user = this.users.find((user) => user.email === email);
        if (!user) {
            throw new BadRequestException('User not found');
        }
        return Promise.resolve(user);
    }

    resetData(): Promise<void> {
        this.users = [];
        return Promise.resolve();
    }
}
