export default class DocumentTypesApi {
    constructor(apiClient?: any);
    apiClient: any;
    documentTypesCreateWithHttpInfo(data: any): Promise<any>;
    documentTypesCreate(data: any): Promise<any>;
    documentTypesDeleteWithHttpInfo(id: number): Promise<any>;
    documentTypesDelete(id: number): Promise<any>;
    documentTypesListWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    documentTypesList(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    documentTypesPartialUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    documentTypesPartialUpdate(id: number, data: any): Promise<any>;
    documentTypesReadWithHttpInfo(id: number): Promise<any>;
    documentTypesRead(id: number): Promise<any>;
    documentTypesUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    documentTypesUpdate(id: number, data: any): Promise<any>;
}
