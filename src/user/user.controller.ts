import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    addUser(@Body() payload: { email: string }): void {
        // payload validation
        if (!payload.email) {
            throw new BadRequestException('Email and password are required');
        }

        // Check email regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(payload.email)) {
            throw new BadRequestException('Invalid email');
        }
        this.userService.addUser(payload.email);
        return;
    }
}
