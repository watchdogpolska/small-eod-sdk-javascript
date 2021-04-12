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
 * The ChannelAutocomplete model module.
 * @module model/ChannelAutocomplete
 * @version 1.0.4
 */
var ChannelAutocomplete = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelAutocomplete</code>.
   * Channel(id, modified_on, created_on, created_by, modified_by, name, city, email, epuap, street, flat_no, house_no, postal_code, voivodeship)
   * @alias module:model/ChannelAutocomplete
   * @param name {String} Channel's name.
   */
  function ChannelAutocomplete(name) {
    _classCallCheck(this, ChannelAutocomplete);

    ChannelAutocomplete.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelAutocomplete, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>ChannelAutocomplete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelAutocomplete} obj Optional instance to populate.
     * @return {module:model/ChannelAutocomplete} The populated <code>ChannelAutocomplete</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelAutocomplete();

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

  return ChannelAutocomplete;
}();
/**
 * Channel's name.
 * @member {String} name
 */


ChannelAutocomplete.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

ChannelAutocomplete.prototype['id'] = undefined;
var _default = ChannelAutocomplete;
exports["default"] = _default;