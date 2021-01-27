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
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Event model module.
 * @module model/Event
 * @version 1.0.4
 */
class Event {
    /**
     * Constructs a new <code>Event</code>.
     * Event(id, modified_on, created_on, created_by, modified_by, date, name, comment, case)
     * @alias module:model/Event
     * @param _case {Number} Case for this event.
     * @param name {String} Name of event.
     * @param _date {Date} Date of event.
     * @param comment {String} Comment text.
     */
    constructor(_case, name, _date, comment) { 
        
        Event.initialize(this, _case, name, _date, comment);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _case, name, _date, comment) { 
        obj['case'] = _case;
        obj['name'] = name;
        obj['date'] = _date;
        obj['comment'] = comment;
    }

    /**
     * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Event} obj Optional instance to populate.
     * @return {module:model/Event} The populated <code>Event</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Event();

            if (data.hasOwnProperty('case')) {
                obj['case'] = ApiClient.convertToType(data['case'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Case for this event.
 * @member {Number} case
 */
Event.prototype['case'] = undefined;

/**
 * Name of event.
 * @member {String} name
 */
Event.prototype['name'] = undefined;

/**
 * Date of event.
 * @member {Date} date
 */
Event.prototype['date'] = undefined;

/**
 * Comment text.
 * @member {String} comment
 */
Event.prototype['comment'] = undefined;

/**
 * @member {Number} id
 */
Event.prototype['id'] = undefined;






export default Event;

