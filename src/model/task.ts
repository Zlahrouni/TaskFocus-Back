export class Task {
    id: string;
    userId: string;
    name: string;
    priority: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: string, userId: string, name: string, priority: number) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.priority = priority;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
