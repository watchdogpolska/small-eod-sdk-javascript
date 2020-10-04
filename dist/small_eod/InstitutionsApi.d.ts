export default class InstitutionsApi {
    constructor(apiClient?: any);
    apiClient: any;
    institutionsCreateWithHttpInfo(data: any): Promise<any>;
    institutionsCreate(data: any): Promise<any>;
    institutionsDeleteWithHttpInfo(id: number): Promise<any>;
    institutionsDelete(id: number): Promise<any>;
    institutionsListWithHttpInfo(opts: {
        limit: number;
        offset: number;
        query: string;
    }): Promise<any>;
    institutionsList(opts: {
        limit: number;
        offset: number;
        query: string;
    }): Promise<any>;
    institutionsPartialUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    institutionsPartialUpdate(id: number, data: any): Promise<any>;
    institutionsReadWithHttpInfo(id: number): Promise<any>;
    institutionsRead(id: number): Promise<any>;
    institutionsUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    institutionsUpdate(id: number, data: any): Promise<any>;
}
