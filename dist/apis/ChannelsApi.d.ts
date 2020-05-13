/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { Channel, InlineResponse2002 } from '../models';
export interface ChannelsCreateRequest {
    data: Channel;
}
export interface ChannelsDeleteRequest {
    id: number;
}
export interface ChannelsListRequest {
    limit?: number;
    offset?: number;
}
export interface ChannelsPartialUpdateRequest {
    id: number;
    data: Channel;
}
export interface ChannelsReadRequest {
    id: number;
}
export interface ChannelsUpdateRequest {
    id: number;
    data: Channel;
}
/**
 *
 */
export declare class ChannelsApi extends runtime.BaseAPI {
    /**
     */
    channelsCreateRaw(requestParameters: ChannelsCreateRequest): Promise<runtime.ApiResponse<Channel>>;
    /**
     */
    channelsCreate(requestParameters: ChannelsCreateRequest): Promise<Channel>;
    /**
     */
    channelsDeleteRaw(requestParameters: ChannelsDeleteRequest): Promise<runtime.ApiResponse<void>>;
    /**
     */
    channelsDelete(requestParameters: ChannelsDeleteRequest): Promise<void>;
    /**
     */
    channelsListRaw(requestParameters: ChannelsListRequest): Promise<runtime.ApiResponse<InlineResponse2002>>;
    /**
     */
    channelsList(requestParameters: ChannelsListRequest): Promise<InlineResponse2002>;
    /**
     */
    channelsPartialUpdateRaw(requestParameters: ChannelsPartialUpdateRequest): Promise<runtime.ApiResponse<Channel>>;
    /**
     */
    channelsPartialUpdate(requestParameters: ChannelsPartialUpdateRequest): Promise<Channel>;
    /**
     */
    channelsReadRaw(requestParameters: ChannelsReadRequest): Promise<runtime.ApiResponse<Channel>>;
    /**
     */
    channelsRead(requestParameters: ChannelsReadRequest): Promise<Channel>;
    /**
     */
    channelsUpdateRaw(requestParameters: ChannelsUpdateRequest): Promise<runtime.ApiResponse<Channel>>;
    /**
     */
    channelsUpdate(requestParameters: ChannelsUpdateRequest): Promise<Channel>;
}
