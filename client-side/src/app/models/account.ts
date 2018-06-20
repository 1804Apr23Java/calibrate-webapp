export class Account {

    public accountId: number;
    public email: string;
    public isAdmin: boolean;
    public password: string;
    public username: string;

    constructor(email: string, username: string, password: string) {
        this.accountId = 0;
        this.email = email;
        this.isAdmin = false;
        this.username = username;
        this.password = password;
    }
}
