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
import { Channel } from './';
/**
 *
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     *
     * @type {number}
     * @memberof InlineResponse2002
     */
    count: number;
    /**
     *
     * @type {Array<Channel>}
     * @memberof InlineResponse2002
     */
    results: Array<Channel>;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2002
     */
    next?: string | null;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2002
     */
    previous?: string | null;
}
export declare function InlineResponse2002FromJSON(json: any): InlineResponse2002;
export declare function InlineResponse2002FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2002;
export declare function InlineResponse2002ToJSON(value?: InlineResponse2002 | null): any;
