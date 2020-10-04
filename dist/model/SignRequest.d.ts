export default SignRequest;
declare class SignRequest {
    static initialize(obj: any, name: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(name: string);
    name: any;
    method: any;
    url: any;
    formData: any;
    path: any;
}
