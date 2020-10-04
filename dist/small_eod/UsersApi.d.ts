export default class UsersApi {
    constructor(apiClient?: any);
    apiClient: any;
    usersAuthWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    usersAuth(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    usersCreateWithHttpInfo(data: any): Promise<any>;
    usersCreate(data: any): Promise<any>;
    usersDeleteWithHttpInfo(id: number): Promise<any>;
    usersDelete(id: number): Promise<any>;
    usersExchangeWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    usersExchange(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    usersListWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    usersList(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    usersPartialUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    usersPartialUpdate(id: number, data: any): Promise<any>;
    usersReadWithHttpInfo(id: number): Promise<any>;
    usersRead(id: number): Promise<any>;
    usersRefreshWithHttpInfo(data: any): Promise<any>;
    usersRefresh(data: any): Promise<any>;
    usersUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    usersUpdate(id: number, data: any): Promise<any>;
}
