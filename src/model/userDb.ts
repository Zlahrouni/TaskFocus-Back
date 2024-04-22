import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserDb {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ unique: true })
    email: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
