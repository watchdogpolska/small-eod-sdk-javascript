"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CaseCount model module.
 * @module model/CaseCount
 * @version 1.0.4
 */
var CaseCount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CaseCount</code>.
   * Case(id, modified_on, created_on, created_by, modified_by, name, comment)
   * @alias module:model/CaseCount
   * @param name {String} Case's name.
   */
  function CaseCount(name) {
    _classCallCheck(this, CaseCount);

    CaseCount.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CaseCount, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>CaseCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CaseCount} obj Optional instance to populate.
     * @return {module:model/CaseCount} The populated <code>CaseCount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CaseCount();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('auditedInstitutions')) {
          obj['auditedInstitutions'] = _ApiClient["default"].convertToType(data['auditedInstitutions'], ['Number']);
        }

        if (data.hasOwnProperty('responsibleUsers')) {
          obj['responsibleUsers'] = _ApiClient["default"].convertToType(data['responsibleUsers'], ['Number']);
        }

        if (data.hasOwnProperty('notifiedUsers')) {
          obj['notifiedUsers'] = _ApiClient["default"].convertToType(data['notifiedUsers'], ['Number']);
        }

        if (data.hasOwnProperty('featureoptions')) {
          obj['featureoptions'] = _ApiClient["default"].convertToType(data['featureoptions'], ['Number']);
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient["default"].convertToType(data['createdBy'], 'Number');
        }

        if (data.hasOwnProperty('modifiedBy')) {
          obj['modifiedBy'] = _ApiClient["default"].convertToType(data['modifiedBy'], 'Number');
        }

        if (data.hasOwnProperty('createdOn')) {
          obj['createdOn'] = _ApiClient["default"].convertToType(data['createdOn'], 'Date');
        }

        if (data.hasOwnProperty('modifiedOn')) {
          obj['modifiedOn'] = _ApiClient["default"].convertToType(data['modifiedOn'], 'Date');
        }

        if (data.hasOwnProperty('letterCount')) {
          obj['letterCount'] = _ApiClient["default"].convertToType(data['letterCount'], 'Number');
        }

        if (data.hasOwnProperty('noteCount')) {
          obj['noteCount'] = _ApiClient["default"].convertToType(data['noteCount'], 'Number');
        }

        if (data.hasOwnProperty('eventCount')) {
          obj['eventCount'] = _ApiClient["default"].convertToType(data['eventCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CaseCount;
}();
/**
 * Case's name.
 * @member {String} name
 */


CaseCount.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

CaseCount.prototype['id'] = undefined;
/**
 * Comment for this case.
 * @member {String} comment
 */

CaseCount.prototype['comment'] = undefined;
/**
 * Case audits this Institutions.
 * @member {Array.<Number>} auditedInstitutions
 */

CaseCount.prototype['auditedInstitutions'] = undefined;
/**
 * @member {Array.<Number>} responsibleUsers
 */

CaseCount.prototype['responsibleUsers'] = undefined;
/**
 * @member {Array.<Number>} notifiedUsers
 */

CaseCount.prototype['notifiedUsers'] = undefined;
/**
 * @member {Array.<Number>} featureoptions
 */

CaseCount.prototype['featureoptions'] = undefined;
/**
 * 
 * @member {Array.<String>} tags
 */

CaseCount.prototype['tags'] = undefined;
/**
 * @member {Number} createdBy
 */

CaseCount.prototype['createdBy'] = undefined;
/**
 * @member {Number} modifiedBy
 */

CaseCount.prototype['modifiedBy'] = undefined;
/**
 * @member {Date} createdOn
 */

CaseCount.prototype['createdOn'] = undefined;
/**
 * @member {Date} modifiedOn
 */

CaseCount.prototype['modifiedOn'] = undefined;
/**
 * @member {Number} letterCount
 */

CaseCount.prototype['letterCount'] = undefined;
/**
 * @member {Number} noteCount
 */

CaseCount.prototype['noteCount'] = undefined;
/**
 * @member {Number} eventCount
 */

CaseCount.prototype['eventCount'] = undefined;
var _default = CaseCount;
exports["default"] = _default;