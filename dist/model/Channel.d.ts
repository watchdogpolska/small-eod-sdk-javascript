export default Channel;
declare class Channel {
    static initialize(obj: any, name: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(name: string);
    name: any;
    id: any;
    city: any;
    voivodeship: any;
    flatNo: any;
    street: any;
    postalCode: any;
    houseNo: any;
    email: any;
    epuap: any;
}
