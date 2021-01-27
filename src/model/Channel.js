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
 * The Channel model module.
 * @module model/Channel
 * @version 1.0.4
 */
class Channel {
    /**
     * Constructs a new <code>Channel</code>.
     * Channel(id, modified_on, created_on, created_by, modified_by, name, city, email, epuap, street, flat_no, house_no, postal_code, voivodeship)
     * @alias module:model/Channel
     * @param name {String} Channel's name.
     */
    constructor(name) { 
        
        Channel.initialize(this, name);
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
     * Constructs a <code>Channel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Channel} obj Optional instance to populate.
     * @return {module:model/Channel} The populated <code>Channel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Channel();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'Boolean');
            }
            if (data.hasOwnProperty('voivodeship')) {
                obj['voivodeship'] = ApiClient.convertToType(data['voivodeship'], 'Boolean');
            }
            if (data.hasOwnProperty('flatNo')) {
                obj['flatNo'] = ApiClient.convertToType(data['flatNo'], 'Boolean');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'Boolean');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'Boolean');
            }
            if (data.hasOwnProperty('houseNo')) {
                obj['houseNo'] = ApiClient.convertToType(data['houseNo'], 'Boolean');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'Boolean');
            }
            if (data.hasOwnProperty('epuap')) {
                obj['epuap'] = ApiClient.convertToType(data['epuap'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Channel's name.
 * @member {String} name
 */
Channel.prototype['name'] = undefined;

/**
 * @member {Number} id
 */
Channel.prototype['id'] = undefined;

/**
 * Name of city in institution address is mandatory for this channel.
 * @member {Boolean} city
 */
Channel.prototype['city'] = undefined;

/**
 * Voivodeship in institution address is mandatory for this channel.
 * @member {Boolean} voivodeship
 */
Channel.prototype['voivodeship'] = undefined;

/**
 * Flat number in institution address is mandatory for this channel.
 * @member {Boolean} flatNo
 */
Channel.prototype['flatNo'] = undefined;

/**
 * Name of street in institution address is mandatory for this channel.
 * @member {Boolean} street
 */
Channel.prototype['street'] = undefined;

/**
 * Postal code in institution address is mandatory for this channel.
 * @member {Boolean} postalCode
 */
Channel.prototype['postalCode'] = undefined;

/**
 * House number in institution address is mandatory for this channel.
 * @member {Boolean} houseNo
 */
Channel.prototype['houseNo'] = undefined;

/**
 * Institution e-mail address is mandatory for this channel.
 * @member {Boolean} email
 */
Channel.prototype['email'] = undefined;

/**
 * Institution ePUAP address is mandatory for this channel.
 * @member {Boolean} epuap
 */
Channel.prototype['epuap'] = undefined;






export default Channel;

