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
 * The FeatureOption model module.
 * @module model/FeatureOption
 * @version 1.0.4
 */
class FeatureOption {
    /**
     * Constructs a new <code>FeatureOption</code>.
     * FeatureOption(id, name, feature)
     * @alias module:model/FeatureOption
     * @param name {String} Name of option.
     */
    constructor(name) { 
        
        FeatureOption.initialize(this, name);
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
     * Constructs a <code>FeatureOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeatureOption} obj Optional instance to populate.
     * @return {module:model/FeatureOption} The populated <code>FeatureOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeatureOption();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('feature')) {
                obj['feature'] = ApiClient.convertToType(data['feature'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Name of option.
 * @member {String} name
 */
FeatureOption.prototype['name'] = undefined;

/**
 * @member {Number} id
 */
FeatureOption.prototype['id'] = undefined;

/**
 * @member {Number} feature
 */
FeatureOption.prototype['feature'] = undefined;






export default FeatureOption;

