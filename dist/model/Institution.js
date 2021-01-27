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
 * The Institution model module.
 * @module model/Institution
 * @version 1.0.4
 */
var Institution = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Institution</code>.
   * Institution(id, modified_on, created_on, created_by, modified_by, name, administrative_unit, email, city, epuap, street, house_no, postal_code, flat_no, nip, regon, comment)
   * @alias module:model/Institution
   * @param name {String} Name of institution
   * @param administrativeUnit {String} 
   */
  function Institution(name, administrativeUnit) {
    _classCallCheck(this, Institution);

    Institution.initialize(this, name, administrativeUnit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Institution, null, [{
    key: "initialize",
    value: function initialize(obj, name, administrativeUnit) {
      obj['name'] = name;
      obj['administrativeUnit'] = administrativeUnit;
    }
    /**
     * Constructs a <code>Institution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Institution} obj Optional instance to populate.
     * @return {module:model/Institution} The populated <code>Institution</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Institution();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('administrativeUnit')) {
          obj['administrativeUnit'] = _ApiClient["default"].convertToType(data['administrativeUnit'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('modifiedBy')) {
          obj['modifiedBy'] = _ApiClient["default"].convertToType(data['modifiedBy'], 'Number');
        }

        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient["default"].convertToType(data['createdBy'], 'Number');
        }

        if (data.hasOwnProperty('modifiedOn')) {
          obj['modifiedOn'] = _ApiClient["default"].convertToType(data['modifiedOn'], 'Date');
        }

        if (data.hasOwnProperty('createdOn')) {
          obj['createdOn'] = _ApiClient["default"].convertToType(data['createdOn'], 'Date');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('epuap')) {
          obj['epuap'] = _ApiClient["default"].convertToType(data['epuap'], 'String');
        }

        if (data.hasOwnProperty('street')) {
          obj['street'] = _ApiClient["default"].convertToType(data['street'], 'String');
        }

        if (data.hasOwnProperty('houseNo')) {
          obj['houseNo'] = _ApiClient["default"].convertToType(data['houseNo'], 'String');
        }

        if (data.hasOwnProperty('postalCode')) {
          obj['postalCode'] = _ApiClient["default"].convertToType(data['postalCode'], 'String');
        }

        if (data.hasOwnProperty('flatNo')) {
          obj['flatNo'] = _ApiClient["default"].convertToType(data['flatNo'], 'String');
        }

        if (data.hasOwnProperty('nip')) {
          obj['nip'] = _ApiClient["default"].convertToType(data['nip'], 'String');
        }

        if (data.hasOwnProperty('regon')) {
          obj['regon'] = _ApiClient["default"].convertToType(data['regon'], 'String');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Institution;
}();
/**
 * Name of institution
 * @member {String} name
 */


Institution.prototype['name'] = undefined;
/**
 * @member {String} administrativeUnit
 */

Institution.prototype['administrativeUnit'] = undefined;
/**
 * @member {Number} id
 */

Institution.prototype['id'] = undefined;
/**
 * @member {Number} modifiedBy
 */

Institution.prototype['modifiedBy'] = undefined;
/**
 * @member {Number} createdBy
 */

Institution.prototype['createdBy'] = undefined;
/**
 * @member {Date} modifiedOn
 */

Institution.prototype['modifiedOn'] = undefined;
/**
 * @member {Date} createdOn
 */

Institution.prototype['createdOn'] = undefined;
/**
 * E-mail address.
 * @member {String} email
 */

Institution.prototype['email'] = undefined;
/**
 * Name of city.
 * @member {String} city
 */

Institution.prototype['city'] = undefined;
/**
 * ePUAP address.
 * @member {String} epuap
 */

Institution.prototype['epuap'] = undefined;
/**
 * Name of street.
 * @member {String} street
 */

Institution.prototype['street'] = undefined;
/**
 * House number.
 * @member {String} houseNo
 */

Institution.prototype['houseNo'] = undefined;
/**
 * Postal code.
 * @member {String} postalCode
 */

Institution.prototype['postalCode'] = undefined;
/**
 * Flat number.
 * @member {String} flatNo
 */

Institution.prototype['flatNo'] = undefined;
/**
 * Tax Identification Number.
 * @member {String} nip
 */

Institution.prototype['nip'] = undefined;
/**
 * Statistical Identification Number.
 * @member {String} regon
 */

Institution.prototype['regon'] = undefined;
/**
 * Comment for this case.
 * @member {String} comment
 */

Institution.prototype['comment'] = undefined;
/**
 * 
 * @member {Array.<String>} tags
 */

Institution.prototype['tags'] = undefined;
var _default = Institution;
exports["default"] = _default;