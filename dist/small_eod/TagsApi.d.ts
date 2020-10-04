export default class TagsApi {
    constructor(apiClient?: any);
    apiClient: any;
    tagsCreateWithHttpInfo(data: any): Promise<any>;
    tagsCreate(data: any): Promise<any>;
    tagsDeleteWithHttpInfo(id: number): Promise<any>;
    tagsDelete(id: number): Promise<any>;
    tagsListWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    tagsList(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    tagsPartialUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    tagsPartialUpdate(id: number, data: any): Promise<any>;
    tagsReadWithHttpInfo(id: number): Promise<any>;
    tagsRead(id: number): Promise<any>;
    tagsUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    tagsUpdate(id: number, data: any): Promise<any>;
}
