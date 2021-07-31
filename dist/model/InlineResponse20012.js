"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CaseCount = _interopRequireDefault(require("./CaseCount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20012 model module.
 * @module model/InlineResponse20012
 * @version 1.0.4
 */
var InlineResponse20012 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20012</code>.
   * @alias module:model/InlineResponse20012
   * @param count {Number} 
   * @param results {Array.<module:model/CaseCount>} 
   */
  function InlineResponse20012(count, results) {
    _classCallCheck(this, InlineResponse20012);

    InlineResponse20012.initialize(this, count, results);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20012, null, [{
    key: "initialize",
    value: function initialize(obj, count, results) {
      obj['count'] = count;
      obj['results'] = results;
    }
    /**
     * Constructs a <code>InlineResponse20012</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20012} obj Optional instance to populate.
     * @return {module:model/InlineResponse20012} The populated <code>InlineResponse20012</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20012();

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_CaseCount["default"]]);
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _ApiClient["default"].convertToType(data['previous'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20012;
}();
/**
 * @member {Number} count
 */


InlineResponse20012.prototype['count'] = undefined;
/**
 * @member {Array.<module:model/CaseCount>} results
 */

InlineResponse20012.prototype['results'] = undefined;
/**
 * @member {String} next
 */

InlineResponse20012.prototype['next'] = undefined;
/**
 * @member {String} previous
 */

InlineResponse20012.prototype['previous'] = undefined;
var _default = InlineResponse20012;
exports["default"] = _default;