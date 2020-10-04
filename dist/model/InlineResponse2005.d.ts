export default InlineResponse2005;
declare class InlineResponse2005 {
    static initialize(obj: any, count: any, results: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(count: number, results: Array<any>);
    count: any;
    results: any;
    next: any;
    previous: any;
}
