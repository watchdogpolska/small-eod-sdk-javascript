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
import { Dictionary } from './';
/**
 *
 * @export
 * @interface InlineResponse2009
 */
export interface InlineResponse2009 {
    /**
     *
     * @type {number}
     * @memberof InlineResponse2009
     */
    count: number;
    /**
     *
     * @type {Array<Dictionary>}
     * @memberof InlineResponse2009
     */
    results: Array<Dictionary>;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2009
     */
    next?: string | null;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2009
     */
    previous?: string | null;
}
export declare function InlineResponse2009FromJSON(json: any): InlineResponse2009;
export declare function InlineResponse2009FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2009;
export declare function InlineResponse2009ToJSON(value?: InlineResponse2009 | null): any;
