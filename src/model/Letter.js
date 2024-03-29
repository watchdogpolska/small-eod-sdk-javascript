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
 * The Letter model module.
 * @module model/Letter
 * @version 1.0.4
 */
class Letter {
    /**
     * Constructs a new <code>Letter</code>.
     * Letter(id, modified_on, created_on, created_by, modified_by, direction, date, final, comment, excerpt, reference_number, case, channel, institution, document_type)
     * @alias module:model/Letter
     */
    constructor() { 
        
        Letter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Letter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Letter} obj Optional instance to populate.
     * @return {module:model/Letter} The populated <code>Letter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Letter();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'Number');
            }
            if (data.hasOwnProperty('final')) {
                obj['final'] = ApiClient.convertToType(data['final'], 'Boolean');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('referenceNumber')) {
                obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
            }
            if (data.hasOwnProperty('institution')) {
                obj['institution'] = ApiClient.convertToType(data['institution'], 'Number');
            }
            if (data.hasOwnProperty('case')) {
                obj['case'] = ApiClient.convertToType(data['case'], 'Number');
            }
            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = ApiClient.convertToType(data['attachments'], [File]);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('documentType')) {
                obj['documentType'] = ApiClient.convertToType(data['documentType'], 'Number');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Letter.prototype['id'] = undefined;

/**
 * Direction for letter.
 * @member {module:model/Letter.DirectionEnum} direction
 */
Letter.prototype['direction'] = undefined;

/**
 * @member {Number} channel
 */
Letter.prototype['channel'] = undefined;

/**
 * Indicates whether the document has final content or is, for example, a draft
 * @member {Boolean} final
 */
Letter.prototype['final'] = undefined;

/**
 * Date of sending or receiving.
 * @member {Date} date
 */
Letter.prototype['date'] = undefined;

/**
 * @member {String} referenceNumber
 */
Letter.prototype['referenceNumber'] = undefined;

/**
 * @member {Number} institution
 */
Letter.prototype['institution'] = undefined;

/**
 * @member {Number} case
 */
Letter.prototype['case'] = undefined;

/**
 * 
 * @member {Array.<File>} attachments
 */
Letter.prototype['attachments'] = undefined;

/**
 * Comment for letter.
 * @member {String} comment
 */
Letter.prototype['comment'] = undefined;

/**
 * @member {Number} documentType
 */
Letter.prototype['documentType'] = undefined;

/**
 * @member {Date} createdOn
 */
Letter.prototype['createdOn'] = undefined;

/**
 * @member {Number} createdBy
 */
Letter.prototype['createdBy'] = undefined;

/**
 * @member {Date} modifiedOn
 */
Letter.prototype['modifiedOn'] = undefined;

/**
 * @member {Number} modifiedBy
 */
Letter.prototype['modifiedBy'] = undefined;





/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
Letter['DirectionEnum'] = {

    /**
     * value: "IN"
     * @const
     */
    "IN": "IN",

    /**
     * value: "OUT"
     * @const
     */
    "OUT": "OUT"
};



export default Letter;

