export default Note;
declare class Note {
    static initialize(obj: any, _case: any, comment: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(_case: number, comment: string);
    case: any;
    comment: any;
    id: any;
}
