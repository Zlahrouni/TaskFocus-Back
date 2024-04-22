import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TaskDb {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    userId: string;

    @Column()
    name: string;

    @Column()
    priority: number;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
