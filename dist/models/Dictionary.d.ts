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
import { NestedFeature } from './';
/**
 *
 * @export
 * @interface Dictionary
 */
export interface Dictionary {
    /**
     * Name of dictionary.
     * @type {string}
     * @memberof Dictionary
     */
    name: string;
    /**
     *
     * @type {Array<NestedFeature>}
     * @memberof Dictionary
     */
    values: Array<NestedFeature>;
    /**
     * Make active.
     * @type {boolean}
     * @memberof Dictionary
     */
    active?: boolean;
    /**
     * Minimum number of items.
     * @type {number}
     * @memberof Dictionary
     */
    minItems?: number;
    /**
     * Maximum number of items.
     * @type {number}
     * @memberof Dictionary
     */
    maxItems?: number;
}
export declare function DictionaryFromJSON(json: any): Dictionary;
export declare function DictionaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Dictionary;
export declare function DictionaryToJSON(value?: Dictionary | null): any;
