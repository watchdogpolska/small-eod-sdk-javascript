export default Institution;
declare class Institution {
    static initialize(obj: any, name: any, administrativeUnit: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(name: string, administrativeUnit: string);
    name: any;
    administrativeUnit: any;
    id: any;
    modifiedBy: any;
    createdBy: any;
    modifiedOn: any;
    createdOn: any;
    email: any;
    city: any;
    epuap: any;
    street: any;
    houseNo: any;
    postalCode: any;
    flatNo: any;
    nip: any;
    regon: any;
    comment: any;
    tags: any;
}
