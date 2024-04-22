import { Column, Model, Table, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class TaskDb extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER) // Use INTEGER for auto-incrementing ID
    id: number;

    @Column({ allowNull: false })
    userId: string;

    @Column
    name: string;

    @Column
    priority: number;

    @Column(DataType.DATE)
    createdAt: Date;

    @Column(DataType.DATE)
    updatedAt: Date;
}
