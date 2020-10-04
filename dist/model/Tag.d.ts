export default Tag;
declare class Tag {
    static initialize(obj: any, name: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(name: string);
    name: any;
    id: any;
}
