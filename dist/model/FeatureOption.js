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
 * The FeatureOption model module.
 * @module model/FeatureOption
 * @version 1.0.4
 */
var FeatureOption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FeatureOption</code>.
   * @alias module:model/FeatureOption
   * @param name {String} Name of option.
   */
  function FeatureOption(name) {
    _classCallCheck(this, FeatureOption);

    FeatureOption.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FeatureOption, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>FeatureOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeatureOption} obj Optional instance to populate.
     * @return {module:model/FeatureOption} The populated <code>FeatureOption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FeatureOption();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('feature')) {
          obj['feature'] = _ApiClient["default"].convertToType(data['feature'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FeatureOption;
}();
/**
 * Name of option.
 * @member {String} name
 */


FeatureOption.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

FeatureOption.prototype['id'] = undefined;
/**
 * @member {Number} feature
 */

FeatureOption.prototype['feature'] = undefined;
var _default = FeatureOption;
exports["default"] = _default;