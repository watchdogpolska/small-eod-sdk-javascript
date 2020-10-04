export default class CasesApi {
    constructor(apiClient?: any);
    apiClient: any;
    casesCreateWithHttpInfo(data: any): Promise<any>;
    casesCreate(data: any): Promise<any>;
    casesDeleteWithHttpInfo(id: number): Promise<any>;
    casesDelete(id: number): Promise<any>;
    casesListWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    casesList(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    casesNotifiedUsersListWithHttpInfo(casePk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    casesNotifiedUsersList(casePk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    casesNotifiedUsersReadWithHttpInfo(casePk: string, id: string): Promise<any>;
    casesNotifiedUsersRead(casePk: string, id: string): Promise<any>;
    casesPartialUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    casesPartialUpdate(id: number, data: any): Promise<any>;
    casesReadWithHttpInfo(id: number): Promise<any>;
    casesRead(id: number): Promise<any>;
    casesResponsibleUsersListWithHttpInfo(casePk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    casesResponsibleUsersList(casePk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    casesResponsibleUsersReadWithHttpInfo(casePk: string, id: string): Promise<any>;
    casesResponsibleUsersRead(casePk: string, id: string): Promise<any>;
    casesUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    casesUpdate(id: number, data: any): Promise<any>;
}
