export default Feature;
declare class Feature {
    static initialize(obj: any, name: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(name: string);
    name: any;
    id: any;
    minOptions: any;
    maxOptions: any;
    featureoptions: any;
}
