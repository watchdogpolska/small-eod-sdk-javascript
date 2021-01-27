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
 * The Collection model module.
 * @module model/Collection
 * @version 1.0.4
 */
class Collection {
    /**
     * Constructs a new <code>Collection</code>.
     * Collection(id, modified_on, created_on, created_by, modified_by, name, expired_on, query, comment, public)
     * @alias module:model/Collection
     * @param name {String} Collection's name.
     * @param expiredOn {Date} An expiration date of collection.
     * @param query {String} Query for collection.
     */
    constructor(name, expiredOn, query) { 
        
        Collection.initialize(this, name, expiredOn, query);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, expiredOn, query) { 
        obj['name'] = name;
        obj['expiredOn'] = expiredOn;
        obj['query'] = query;
    }

    /**
     * Constructs a <code>Collection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collection} obj Optional instance to populate.
     * @return {module:model/Collection} The populated <code>Collection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Collection();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('expiredOn')) {
                obj['expiredOn'] = ApiClient.convertToType(data['expiredOn'], 'Date');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Collection's name.
 * @member {String} name
 */
Collection.prototype['name'] = undefined;

/**
 * An expiration date of collection.
 * @member {Date} expiredOn
 */
Collection.prototype['expiredOn'] = undefined;

/**
 * Query for collection.
 * @member {String} query
 */
Collection.prototype['query'] = undefined;

/**
 * @member {Number} id
 */
Collection.prototype['id'] = undefined;

/**
 * Comment for collection.
 * @member {String} comment
 */
Collection.prototype['comment'] = undefined;

/**
 * Make public.
 * @member {Boolean} public
 */
Collection.prototype['public'] = undefined;






export default Collection;

