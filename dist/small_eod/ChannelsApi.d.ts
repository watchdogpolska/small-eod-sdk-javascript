export default class ChannelsApi {
    constructor(apiClient?: any);
    apiClient: any;
    channelsCreateWithHttpInfo(data: any): Promise<any>;
    channelsCreate(data: any): Promise<any>;
    channelsDeleteWithHttpInfo(id: number): Promise<any>;
    channelsDelete(id: number): Promise<any>;
    channelsListWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    channelsList(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    channelsPartialUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    channelsPartialUpdate(id: number, data: any): Promise<any>;
    channelsReadWithHttpInfo(id: number): Promise<any>;
    channelsRead(id: number): Promise<any>;
    channelsUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    channelsUpdate(id: number, data: any): Promise<any>;
}
