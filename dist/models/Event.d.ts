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
/**
 *
 * @export
 * @interface Event
 */
export interface Event {
    /**
     * Case for this event.
     * @type {number}
     * @memberof Event
     */
    _case: number;
    /**
     * Name of event.
     * @type {string}
     * @memberof Event
     */
    name: string;
    /**
     * Date of event.
     * @type {Date}
     * @memberof Event
     */
    data: Date;
    /**
     * Comment text.
     * @type {string}
     * @memberof Event
     */
    comment: string;
    /**
     *
     * @type {number}
     * @memberof Event
     */
    readonly id?: number;
}
export declare function EventFromJSON(json: any): Event;
export declare function EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): Event;
export declare function EventToJSON(value?: Event | null): any;
