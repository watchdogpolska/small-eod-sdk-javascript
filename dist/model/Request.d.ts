export default Request;
declare class Request {
    static initialize(obj: any, url: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(url: string);
    url: any;
}
