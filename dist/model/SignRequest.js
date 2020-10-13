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
 * The SignRequest model module.
 * @module model/SignRequest
 * @version 1.0.4
 */
var SignRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SignRequest</code>.
   * @alias module:model/SignRequest
   * @param name {String} 
   */
  function SignRequest(name) {
    _classCallCheck(this, SignRequest);

    SignRequest.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SignRequest, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>SignRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignRequest} obj Optional instance to populate.
     * @return {module:model/SignRequest} The populated <code>SignRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SignRequest();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('formData')) {
          obj['formData'] = _ApiClient["default"].convertToType(data['formData'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SignRequest;
}();
/**
 * @member {String} name
 */


SignRequest.prototype['name'] = undefined;
/**
 * @member {String} method
 */

SignRequest.prototype['method'] = undefined;
/**
 * @member {String} url
 */

SignRequest.prototype['url'] = undefined;
/**
 * @member {Object.<String, String>} formData
 */

SignRequest.prototype['formData'] = undefined;
/**
 * @member {String} path
 */

SignRequest.prototype['path'] = undefined;
var _default = SignRequest;
exports["default"] = _default;