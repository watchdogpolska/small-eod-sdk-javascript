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
 * The TokenResponse model module.
 * @module model/TokenResponse
 * @version 1.0.4
 */
var TokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TokenResponse</code>.
   * @alias module:model/TokenResponse
   * @param accessToken {String} 
   * @param refreshToken {String} 
   */
  function TokenResponse(accessToken, refreshToken) {
    _classCallCheck(this, TokenResponse);

    TokenResponse.initialize(this, accessToken, refreshToken);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj, accessToken, refreshToken) {
      obj['accessToken'] = accessToken;
      obj['refreshToken'] = refreshToken;
    }
    /**
     * Constructs a <code>TokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenResponse} obj Optional instance to populate.
     * @return {module:model/TokenResponse} The populated <code>TokenResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TokenResponse();

        if (data.hasOwnProperty('accessToken')) {
          obj['accessToken'] = _ApiClient["default"].convertToType(data['accessToken'], 'String');
        }

        if (data.hasOwnProperty('refreshToken')) {
          obj['refreshToken'] = _ApiClient["default"].convertToType(data['refreshToken'], 'String');
        }

        if (data.hasOwnProperty('expiresIn')) {
          obj['expiresIn'] = _ApiClient["default"].convertToType(data['expiresIn'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TokenResponse;
}();
/**
 * @member {String} accessToken
 */


TokenResponse.prototype['accessToken'] = undefined;
/**
 * @member {String} refreshToken
 */

TokenResponse.prototype['refreshToken'] = undefined;
/**
 * @member {Number} expiresIn
 */

TokenResponse.prototype['expiresIn'] = undefined;
var _default = TokenResponse;
exports["default"] = _default;