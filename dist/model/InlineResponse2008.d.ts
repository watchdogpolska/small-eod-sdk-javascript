export default InlineResponse2008;
declare class InlineResponse2008 {
    static initialize(obj: any, count: any, results: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(count: number, results: Array<any>);
    count: any;
    results: any;
    next: any;
    previous: any;
}
