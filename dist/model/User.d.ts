export default User;
declare class User {
    static initialize(obj: any, password: any, username: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(password: string, username: string);
    password: any;
    username: any;
    email: any;
    firstName: any;
    lastName: any;
    id: any;
}
