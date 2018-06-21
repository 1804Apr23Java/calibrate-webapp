export class Account {

    public accountId: number;
    public email: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public isAdmin: boolean;
    public isActive: boolean;

    constructor(email: string, firstName: string, lastName: string, password: string) {
        this.accountId = 0;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isAdmin = false;
        this.isActive = true;
    }
}
