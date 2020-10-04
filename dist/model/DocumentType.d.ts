export default DocumentType;
declare class DocumentType {
    static initialize(obj: any, name: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(name: string);
    name: any;
}
