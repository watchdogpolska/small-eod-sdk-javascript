export default class EventsApi {
    constructor(apiClient?: any);
    apiClient: any;
    eventsCreateWithHttpInfo(data: any): Promise<any>;
    eventsCreate(data: any): Promise<any>;
    eventsDeleteWithHttpInfo(id: number): Promise<any>;
    eventsDelete(id: number): Promise<any>;
    eventsListWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    eventsList(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    eventsPartialUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    eventsPartialUpdate(id: number, data: any): Promise<any>;
    eventsReadWithHttpInfo(id: number): Promise<any>;
    eventsRead(id: number): Promise<any>;
    eventsUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    eventsUpdate(id: number, data: any): Promise<any>;
}
