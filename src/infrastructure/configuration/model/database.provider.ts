import { TaskDb } from '../../../model/taskDb';
import { UserDb } from '../../../model/userDb';
import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 24000,
                username: 'postgres',
                password: 'postgres',
                database: process.env.DATABASE_NAME,
            });
            sequelize.addModels([UserDb, TaskDb]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
