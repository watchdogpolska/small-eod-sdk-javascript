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
 * The AdministrativeUnitAutocomplete model module.
 * @module model/AdministrativeUnitAutocomplete
 * @version 1.0.4
 */
var AdministrativeUnitAutocomplete = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AdministrativeUnitAutocomplete</code>.
   * AdministrativeUnit(id, parent, name, category, slug, updated_on, active, lft, rght, tree_id, level)
   * @alias module:model/AdministrativeUnitAutocomplete
   * @param id {String} 
   * @param name {String} 
   */
  function AdministrativeUnitAutocomplete(id, name) {
    _classCallCheck(this, AdministrativeUnitAutocomplete);

    AdministrativeUnitAutocomplete.initialize(this, id, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AdministrativeUnitAutocomplete, null, [{
    key: "initialize",
    value: function initialize(obj, id, name) {
      obj['id'] = id;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>AdministrativeUnitAutocomplete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdministrativeUnitAutocomplete} obj Optional instance to populate.
     * @return {module:model/AdministrativeUnitAutocomplete} The populated <code>AdministrativeUnitAutocomplete</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AdministrativeUnitAutocomplete();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AdministrativeUnitAutocomplete;
}();
/**
 * @member {String} id
 */


AdministrativeUnitAutocomplete.prototype['id'] = undefined;
/**
 * @member {String} name
 */

AdministrativeUnitAutocomplete.prototype['name'] = undefined;
var _default = AdministrativeUnitAutocomplete;
exports["default"] = _default;