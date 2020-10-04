export default Event;
declare class Event {
    static initialize(obj: any, _case: any, name: any, _date: any, comment: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(_case: number, name: string, _date: Date, comment: string);
    case: any;
    name: any;
    date: any;
    comment: any;
    id: any;
}
