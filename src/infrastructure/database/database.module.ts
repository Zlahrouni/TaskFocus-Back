import { Module } from '@nestjs/common';
import { databaseProviders } from '../configuration/model/database.provider';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}
