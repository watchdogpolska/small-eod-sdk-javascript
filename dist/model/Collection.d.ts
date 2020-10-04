export default Collection;
declare class Collection {
    static initialize(obj: any, name: any, expiredOn: any, query: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(name: string, expiredOn: Date, query: string);
    name: any;
    expiredOn: any;
    query: any;
    id: any;
    comment: any;
    public: any;
}
