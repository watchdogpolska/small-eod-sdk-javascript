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
 * The InstitutionAutocomplete model module.
 * @module model/InstitutionAutocomplete
 * @version 1.0.4
 */
var InstitutionAutocomplete = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstitutionAutocomplete</code>.
   * Institution(id, modified_on, created_on, created_by, modified_by, name, administrative_unit, email, city, epuap, street, house_no, postal_code, flat_no, nip, regon, comment)
   * @alias module:model/InstitutionAutocomplete
   * @param name {String} Name of institution
   */
  function InstitutionAutocomplete(name) {
    _classCallCheck(this, InstitutionAutocomplete);

    InstitutionAutocomplete.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstitutionAutocomplete, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>InstitutionAutocomplete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstitutionAutocomplete} obj Optional instance to populate.
     * @return {module:model/InstitutionAutocomplete} The populated <code>InstitutionAutocomplete</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstitutionAutocomplete();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InstitutionAutocomplete;
}();
/**
 * Name of institution
 * @member {String} name
 */


InstitutionAutocomplete.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

InstitutionAutocomplete.prototype['id'] = undefined;
var _default = InstitutionAutocomplete;
exports["default"] = _default;