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
 * The UserAutocomplete model module.
 * @module model/UserAutocomplete
 * @version 1.0.4
 */
var UserAutocomplete = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserAutocomplete</code>.
   * User(id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined)
   * @alias module:model/UserAutocomplete
   * @param username {String} Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   */
  function UserAutocomplete(username) {
    _classCallCheck(this, UserAutocomplete);

    UserAutocomplete.initialize(this, username);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserAutocomplete, null, [{
    key: "initialize",
    value: function initialize(obj, username) {
      obj['username'] = username;
    }
    /**
     * Constructs a <code>UserAutocomplete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserAutocomplete} obj Optional instance to populate.
     * @return {module:model/UserAutocomplete} The populated <code>UserAutocomplete</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserAutocomplete();

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return UserAutocomplete;
}();
/**
 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
 * @member {String} username
 */


UserAutocomplete.prototype['username'] = undefined;
/**
 * @member {Number} id
 */

UserAutocomplete.prototype['id'] = undefined;
var _default = UserAutocomplete;
exports["default"] = _default;