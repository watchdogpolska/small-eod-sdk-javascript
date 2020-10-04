export default Letter;
declare class Letter {
    static initialize(obj: any): void;
    static constructFromObject(data: any, obj: any): any;
    id: any;
    direction: any;
    channel: any;
    final: any;
    date: any;
    referenceNumber: any;
    institution: any;
    case: any;
    attachments: any;
    ordering: any;
    comment: any;
    excerpt: any;
    documentType: any;
    createdOn: any;
    createdBy: any;
    modifiedOn: any;
    modifiedBy: any;
}
declare namespace Letter {
    namespace DirectionEnum {
        const IN: string;
        const OUT: string;
    }
}
