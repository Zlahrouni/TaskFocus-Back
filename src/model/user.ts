export class User {
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: string, email: string) {
        this.email = email;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
