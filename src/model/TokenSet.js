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
 * The TokenSet model module.
 * @module model/TokenSet
 * @version 1.0.4
 */
class TokenSet {
    /**
     * Constructs a new <code>TokenSet</code>.
     * 
     * @alias module:model/TokenSet
     */
    constructor() { 
        
        TokenSet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TokenSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenSet} obj Optional instance to populate.
     * @return {module:model/TokenSet} The populated <code>TokenSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenSet();

            if (data.hasOwnProperty('lifetime')) {
                obj['lifetime'] = ApiClient.convertToType(data['lifetime'], 'Number');
            }
            if (data.hasOwnProperty('accessToken')) {
                obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} lifetime
 */
TokenSet.prototype['lifetime'] = undefined;

/**
 * @member {String} accessToken
 */
TokenSet.prototype['accessToken'] = undefined;






export default TokenSet;

