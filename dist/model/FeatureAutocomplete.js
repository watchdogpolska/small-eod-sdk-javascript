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
 * The FeatureAutocomplete model module.
 * @module model/FeatureAutocomplete
 * @version 1.0.4
 */
var FeatureAutocomplete = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FeatureAutocomplete</code>.
   * Feature(id, modified_on, created_on, created_by, modified_by, name, min_options, max_options)
   * @alias module:model/FeatureAutocomplete
   * @param name {String} Name of feature.
   */
  function FeatureAutocomplete(name) {
    _classCallCheck(this, FeatureAutocomplete);

    FeatureAutocomplete.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FeatureAutocomplete, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>FeatureAutocomplete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeatureAutocomplete} obj Optional instance to populate.
     * @return {module:model/FeatureAutocomplete} The populated <code>FeatureAutocomplete</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FeatureAutocomplete();

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

  return FeatureAutocomplete;
}();
/**
 * Name of feature.
 * @member {String} name
 */


FeatureAutocomplete.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

FeatureAutocomplete.prototype['id'] = undefined;
var _default = FeatureAutocomplete;
exports["default"] = _default;