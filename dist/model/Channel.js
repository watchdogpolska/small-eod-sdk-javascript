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
 * The Channel model module.
 * @module model/Channel
 * @version 1.0.4
 */
var Channel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Channel</code>.
   * @alias module:model/Channel
   * @param name {String} Channel's name.
   */
  function Channel(name) {
    _classCallCheck(this, Channel);

    Channel.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Channel, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>Channel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Channel} obj Optional instance to populate.
     * @return {module:model/Channel} The populated <code>Channel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Channel();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'Boolean');
        }

        if (data.hasOwnProperty('voivodeship')) {
          obj['voivodeship'] = _ApiClient["default"].convertToType(data['voivodeship'], 'Boolean');
        }

        if (data.hasOwnProperty('flatNo')) {
          obj['flatNo'] = _ApiClient["default"].convertToType(data['flatNo'], 'Boolean');
        }

        if (data.hasOwnProperty('street')) {
          obj['street'] = _ApiClient["default"].convertToType(data['street'], 'Boolean');
        }

        if (data.hasOwnProperty('postalCode')) {
          obj['postalCode'] = _ApiClient["default"].convertToType(data['postalCode'], 'Boolean');
        }

        if (data.hasOwnProperty('houseNo')) {
          obj['houseNo'] = _ApiClient["default"].convertToType(data['houseNo'], 'Boolean');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'Boolean');
        }

        if (data.hasOwnProperty('epuap')) {
          obj['epuap'] = _ApiClient["default"].convertToType(data['epuap'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Channel;
}();
/**
 * Channel's name.
 * @member {String} name
 */


Channel.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

Channel.prototype['id'] = undefined;
/**
 * Name of city in institution address is mandatory for this channel.
 * @member {Boolean} city
 */

Channel.prototype['city'] = undefined;
/**
 * Voivodeship in institution address is mandatory for this channel.
 * @member {Boolean} voivodeship
 */

Channel.prototype['voivodeship'] = undefined;
/**
 * Flat number in institution address is mandatory for this channel.
 * @member {Boolean} flatNo
 */

Channel.prototype['flatNo'] = undefined;
/**
 * Name of street in institution address is mandatory for this channel.
 * @member {Boolean} street
 */

Channel.prototype['street'] = undefined;
/**
 * Postal code in institution address is mandatory for this channel.
 * @member {Boolean} postalCode
 */

Channel.prototype['postalCode'] = undefined;
/**
 * House number in institution address is mandatory for this channel.
 * @member {Boolean} houseNo
 */

Channel.prototype['houseNo'] = undefined;
/**
 * Institution e-mail address is mandatory for this channel.
 * @member {Boolean} email
 */

Channel.prototype['email'] = undefined;
/**
 * Institution ePUAP address is mandatory for this channel.
 * @member {Boolean} epuap
 */

Channel.prototype['epuap'] = undefined;
var _default = Channel;
exports["default"] = _default;