import { UserDb } from './userDb';

export const usersProviders = [
    {
        provide: 'USERS_REPOSITORY',
        useValue: UserDb,
    },
];
