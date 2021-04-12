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
 * The FeatureOptionAutocomplete model module.
 * @module model/FeatureOptionAutocomplete
 * @version 1.0.4
 */
var FeatureOptionAutocomplete = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FeatureOptionAutocomplete</code>.
   * FeatureOption(id, name, feature)
   * @alias module:model/FeatureOptionAutocomplete
   * @param name {String} Name of option.
   */
  function FeatureOptionAutocomplete(name) {
    _classCallCheck(this, FeatureOptionAutocomplete);

    FeatureOptionAutocomplete.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FeatureOptionAutocomplete, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>FeatureOptionAutocomplete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeatureOptionAutocomplete} obj Optional instance to populate.
     * @return {module:model/FeatureOptionAutocomplete} The populated <code>FeatureOptionAutocomplete</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FeatureOptionAutocomplete();

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

  return FeatureOptionAutocomplete;
}();
/**
 * Name of option.
 * @member {String} name
 */


FeatureOptionAutocomplete.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

FeatureOptionAutocomplete.prototype['id'] = undefined;
var _default = FeatureOptionAutocomplete;
exports["default"] = _default;