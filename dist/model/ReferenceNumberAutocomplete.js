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
 * The ReferenceNumberAutocomplete model module.
 * @module model/ReferenceNumberAutocomplete
 * @version 1.0.4
 */
var ReferenceNumberAutocomplete = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReferenceNumberAutocomplete</code>.
   * ReferenceNumber(id, name)
   * @alias module:model/ReferenceNumberAutocomplete
   * @param name {String} Reference number of letter.
   */
  function ReferenceNumberAutocomplete(name) {
    _classCallCheck(this, ReferenceNumberAutocomplete);

    ReferenceNumberAutocomplete.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReferenceNumberAutocomplete, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>ReferenceNumberAutocomplete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferenceNumberAutocomplete} obj Optional instance to populate.
     * @return {module:model/ReferenceNumberAutocomplete} The populated <code>ReferenceNumberAutocomplete</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReferenceNumberAutocomplete();

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

  return ReferenceNumberAutocomplete;
}();
/**
 * Reference number of letter.
 * @member {String} name
 */


ReferenceNumberAutocomplete.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

ReferenceNumberAutocomplete.prototype['id'] = undefined;
var _default = ReferenceNumberAutocomplete;
exports["default"] = _default;