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
import NestedFeatureOption from './NestedFeatureOption';

/**
 * The Feature model module.
 * @module model/Feature
 * @version 1.0.4
 */
class Feature {
    /**
     * Constructs a new <code>Feature</code>.
     * @alias module:model/Feature
     * @param name {String} Name of feature.
     */
    constructor(name) { 
        
        Feature.initialize(this, name);
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
     * Constructs a <code>Feature</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Feature} obj Optional instance to populate.
     * @return {module:model/Feature} The populated <code>Feature</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Feature();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('minOptions')) {
                obj['minOptions'] = ApiClient.convertToType(data['minOptions'], 'Number');
            }
            if (data.hasOwnProperty('maxOptions')) {
                obj['maxOptions'] = ApiClient.convertToType(data['maxOptions'], 'Number');
            }
            if (data.hasOwnProperty('featureoptions')) {
                obj['featureoptions'] = ApiClient.convertToType(data['featureoptions'], [NestedFeatureOption]);
            }
        }
        return obj;
    }


}

/**
 * Name of feature.
 * @member {String} name
 */
Feature.prototype['name'] = undefined;

/**
 * @member {Number} id
 */
Feature.prototype['id'] = undefined;

/**
 * Minimum number of selected option (if any).
 * @member {Number} minOptions
 */
Feature.prototype['minOptions'] = undefined;

/**
 * Maximum number of selected option.
 * @member {Number} maxOptions
 */
Feature.prototype['maxOptions'] = undefined;

/**
 * @member {Array.<module:model/NestedFeatureOption>} featureoptions
 */
Feature.prototype['featureoptions'] = undefined;






export default Feature;

