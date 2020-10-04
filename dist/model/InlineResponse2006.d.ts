export default InlineResponse2006;
declare class InlineResponse2006 {
    static initialize(obj: any, count: any, results: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(count: number, results: Array<any>);
    count: any;
    results: any;
    next: any;
    previous: any;
}
