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
 * The TokenResponse model module.
 * @module model/TokenResponse
 * @version 1.0.4
 */
class TokenResponse {
    /**
     * Constructs a new <code>TokenResponse</code>.
     * 
     * @alias module:model/TokenResponse
     * @param accessToken {String} 
     * @param refreshToken {String} 
     */
    constructor(accessToken, refreshToken) { 
        
        TokenResponse.initialize(this, accessToken, refreshToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessToken, refreshToken) { 
        obj['accessToken'] = accessToken;
        obj['refreshToken'] = refreshToken;
    }

    /**
     * Constructs a <code>TokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenResponse} obj Optional instance to populate.
     * @return {module:model/TokenResponse} The populated <code>TokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenResponse();

            if (data.hasOwnProperty('accessToken')) {
                obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
            }
            if (data.hasOwnProperty('refreshToken')) {
                obj['refreshToken'] = ApiClient.convertToType(data['refreshToken'], 'String');
            }
            if (data.hasOwnProperty('expiresIn')) {
                obj['expiresIn'] = ApiClient.convertToType(data['expiresIn'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} accessToken
 */
TokenResponse.prototype['accessToken'] = undefined;

/**
 * @member {String} refreshToken
 */
TokenResponse.prototype['refreshToken'] = undefined;

/**
 * @member {Number} expiresIn
 */
TokenResponse.prototype['expiresIn'] = undefined;






export default TokenResponse;

