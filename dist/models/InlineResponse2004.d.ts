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
import { Case } from './';
/**
 *
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
    /**
     *
     * @type {number}
     * @memberof InlineResponse2004
     */
    count: number;
    /**
     *
     * @type {Array<Case>}
     * @memberof InlineResponse2004
     */
    results: Array<Case>;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2004
     */
    next?: string | null;
    /**
     *
     * @type {string}
     * @memberof InlineResponse2004
     */
    previous?: string | null;
}
export declare function InlineResponse2004FromJSON(json: any): InlineResponse2004;
export declare function InlineResponse2004FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2004;
export declare function InlineResponse2004ToJSON(value?: InlineResponse2004 | null): any;