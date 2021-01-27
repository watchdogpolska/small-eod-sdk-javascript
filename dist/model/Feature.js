"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NestedFeatureOption = _interopRequireDefault(require("./NestedFeatureOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Feature model module.
 * @module model/Feature
 * @version 1.0.4
 */
var Feature = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Feature</code>.
   * Feature(id, modified_on, created_on, created_by, modified_by, name, min_options, max_options)
   * @alias module:model/Feature
   * @param name {String} Name of feature.
   */
  function Feature(name) {
    _classCallCheck(this, Feature);

    Feature.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Feature, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>Feature</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Feature} obj Optional instance to populate.
     * @return {module:model/Feature} The populated <code>Feature</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Feature();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('minOptions')) {
          obj['minOptions'] = _ApiClient["default"].convertToType(data['minOptions'], 'Number');
        }

        if (data.hasOwnProperty('maxOptions')) {
          obj['maxOptions'] = _ApiClient["default"].convertToType(data['maxOptions'], 'Number');
        }

        if (data.hasOwnProperty('featureoptions')) {
          obj['featureoptions'] = _ApiClient["default"].convertToType(data['featureoptions'], [_NestedFeatureOption["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Feature;
}();
/**
 * Name of feature.
 * @member {String} name
 */


Feature.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

Feature.prototype['id'] = undefined;
/**
 * Minimum number of selected option (if any).
 * @member {Number} minOptions
 */

Feature.prototype['minOptions'] = undefined;
/**
 * Maximum number of selected option.
 * @member {Number} maxOptions
 */

Feature.prototype['maxOptions'] = undefined;
/**
 * 
 * @member {Array.<module:model/NestedFeatureOption>} featureoptions
 */

Feature.prototype['featureoptions'] = undefined;
var _default = Feature;
exports["default"] = _default;