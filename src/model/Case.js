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
 * The Case model module.
 * @module model/Case
 * @version 1.0.4
 */
class Case {
    /**
     * Constructs a new <code>Case</code>.
     * Case(id, modified_on, created_on, created_by, modified_by, name, comment)
     * @alias module:model/Case
     * @param name {String} Case's name.
     */
    constructor(name) { 
        
        Case.initialize(this, name);
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
     * Constructs a <code>Case</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Case} obj Optional instance to populate.
     * @return {module:model/Case} The populated <code>Case</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Case();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('auditedInstitutions')) {
                obj['auditedInstitutions'] = ApiClient.convertToType(data['auditedInstitutions'], ['Number']);
            }
            if (data.hasOwnProperty('responsibleUsers')) {
                obj['responsibleUsers'] = ApiClient.convertToType(data['responsibleUsers'], ['Number']);
            }
            if (data.hasOwnProperty('notifiedUsers')) {
                obj['notifiedUsers'] = ApiClient.convertToType(data['notifiedUsers'], ['Number']);
            }
            if (data.hasOwnProperty('featureoptions')) {
                obj['featureoptions'] = ApiClient.convertToType(data['featureoptions'], ['Number']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'Number');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Case's name.
 * @member {String} name
 */
Case.prototype['name'] = undefined;

/**
 * @member {Number} id
 */
Case.prototype['id'] = undefined;

/**
 * Comment for this case.
 * @member {String} comment
 */
Case.prototype['comment'] = undefined;

/**
 * Case audits this Institutions.
 * @member {Array.<Number>} auditedInstitutions
 */
Case.prototype['auditedInstitutions'] = undefined;

/**
 * @member {Array.<Number>} responsibleUsers
 */
Case.prototype['responsibleUsers'] = undefined;

/**
 * @member {Array.<Number>} notifiedUsers
 */
Case.prototype['notifiedUsers'] = undefined;

/**
 * @member {Array.<Number>} featureoptions
 */
Case.prototype['featureoptions'] = undefined;

/**
 * 
 * @member {Array.<String>} tags
 */
Case.prototype['tags'] = undefined;

/**
 * @member {Number} createdBy
 */
Case.prototype['createdBy'] = undefined;

/**
 * @member {Number} modifiedBy
 */
Case.prototype['modifiedBy'] = undefined;

/**
 * @member {Date} createdOn
 */
Case.prototype['createdOn'] = undefined;

/**
 * @member {Date} modifiedOn
 */
Case.prototype['modifiedOn'] = undefined;






export default Case;

