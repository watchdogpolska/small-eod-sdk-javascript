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
 * The AdministrativeUnit model module.
 * @module model/AdministrativeUnit
 * @version 1.0.4
 */
var AdministrativeUnit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AdministrativeUnit</code>.
   * @alias module:model/AdministrativeUnit
   * @param id {String} 
   * @param name {String} 
   * @param category {Number} 
   * @param updatedOn {Date} 
   */
  function AdministrativeUnit(id, name, category, updatedOn) {
    _classCallCheck(this, AdministrativeUnit);

    AdministrativeUnit.initialize(this, id, name, category, updatedOn);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AdministrativeUnit, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, category, updatedOn) {
      obj['id'] = id;
      obj['name'] = name;
      obj['category'] = category;
      obj['updatedOn'] = updatedOn;
    }
    /**
     * Constructs a <code>AdministrativeUnit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdministrativeUnit} obj Optional instance to populate.
     * @return {module:model/AdministrativeUnit} The populated <code>AdministrativeUnit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AdministrativeUnit();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'Number');
        }

        if (data.hasOwnProperty('updatedOn')) {
          obj['updatedOn'] = _ApiClient["default"].convertToType(data['updatedOn'], 'Date');
        }

        if (data.hasOwnProperty('parent')) {
          obj['parent'] = _ApiClient["default"].convertToType(data['parent'], 'String');
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return AdministrativeUnit;
}();
/**
 * @member {String} id
 */


AdministrativeUnit.prototype['id'] = undefined;
/**
 * @member {String} name
 */

AdministrativeUnit.prototype['name'] = undefined;
/**
 * @member {Number} category
 */

AdministrativeUnit.prototype['category'] = undefined;
/**
 * @member {Date} updatedOn
 */

AdministrativeUnit.prototype['updatedOn'] = undefined;
/**
 * @member {String} parent
 */

AdministrativeUnit.prototype['parent'] = undefined;
/**
 * @member {String} slug
 */

AdministrativeUnit.prototype['slug'] = undefined;
/**
 * @member {Boolean} active
 */

AdministrativeUnit.prototype['active'] = undefined;
var _default = AdministrativeUnit;
exports["default"] = _default;