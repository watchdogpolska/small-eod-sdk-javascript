export default File;
declare class File {
    static initialize(obj: any, path: any, name: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(path: string, name: string);
    path: any;
    name: any;
    id: any;
    downloadUrl: any;
    letter: any;
}
