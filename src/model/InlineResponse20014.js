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
import Channel from './Channel';

/**
 * The InlineResponse20014 model module.
 * @module model/InlineResponse20014
 * @version 1.0.4
 */
class InlineResponse20014 {
    /**
     * Constructs a new <code>InlineResponse20014</code>.
     * @alias module:model/InlineResponse20014
     * @param count {Number} 
     * @param results {Array.<module:model/Channel>} 
     */
    constructor(count, results) { 
        
        InlineResponse20014.initialize(this, count, results);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, count, results) { 
        obj['count'] = count;
        obj['results'] = results;
    }

    /**
     * Constructs a <code>InlineResponse20014</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20014} obj Optional instance to populate.
     * @return {module:model/InlineResponse20014} The populated <code>InlineResponse20014</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20014();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Channel]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
InlineResponse20014.prototype['count'] = undefined;

/**
 * @member {Array.<module:model/Channel>} results
 */
InlineResponse20014.prototype['results'] = undefined;

/**
 * @member {String} next
 */
InlineResponse20014.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
InlineResponse20014.prototype['previous'] = undefined;






export default InlineResponse20014;

