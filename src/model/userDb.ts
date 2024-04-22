import { Column, Model, Table, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class UserDb extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Column({ allowNull: false, unique: true })
    email: string;

    @Column(DataType.DATE) // Use Sequelize.DATE for timestamp
    createdAt: Date;

    @Column(DataType.DATE) // Use Sequelize.DATE for timestamp
    updatedAt: Date;
}
