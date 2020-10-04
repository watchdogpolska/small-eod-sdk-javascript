export default ModelCase;
declare class ModelCase {
    static initialize(obj: any, name: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(name: string);
    name: any;
    id: any;
    comment: any;
    auditedInstitutions: any;
    responsibleUsers: any;
    notifiedUsers: any;
    featureoptions: any;
    tags: any;
    createdBy: any;
    modifiedBy: any;
    createdOn: any;
    modifiedOn: any;
}
