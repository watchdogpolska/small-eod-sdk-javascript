export default class AdministrativeUnitsApi {
    constructor(apiClient?: any);
    apiClient: any;
    administrativeUnitsListWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    administrativeUnitsList(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    administrativeUnitsReadWithHttpInfo(id: string): Promise<any>;
    administrativeUnitsRead(id: string): Promise<any>;
}
