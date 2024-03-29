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
 * The ReferenceNumberAutocomplete model module.
 * @module model/ReferenceNumberAutocomplete
 * @version 1.0.4
 */
class ReferenceNumberAutocomplete {
    /**
     * Constructs a new <code>ReferenceNumberAutocomplete</code>.
     * ReferenceNumber(id, name)
     * @alias module:model/ReferenceNumberAutocomplete
     * @param name {String} Reference number of letter.
     */
    constructor(name) { 
        
        ReferenceNumberAutocomplete.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ReferenceNumberAutocomplete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferenceNumberAutocomplete} obj Optional instance to populate.
     * @return {module:model/ReferenceNumberAutocomplete} The populated <code>ReferenceNumberAutocomplete</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReferenceNumberAutocomplete();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Reference number of letter.
 * @member {String} name
 */
ReferenceNumberAutocomplete.prototype['name'] = undefined;

/**
 * @member {Number} id
 */
ReferenceNumberAutocomplete.prototype['id'] = undefined;






export default ReferenceNumberAutocomplete;

