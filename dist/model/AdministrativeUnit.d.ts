export default AdministrativeUnit;
declare class AdministrativeUnit {
    static initialize(obj: any, id: any, name: any, category: any, updatedOn: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(id: string, name: string, category: number, updatedOn: Date);
    id: any;
    name: any;
    category: any;
    updatedOn: any;
    parent: any;
    slug: any;
    active: any;
}
