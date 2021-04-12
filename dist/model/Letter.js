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
 * The Letter model module.
 * @module model/Letter
 * @version 1.0.4
 */
var Letter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Letter</code>.
   * Letter(id, modified_on, created_on, created_by, modified_by, direction, date, final, comment, excerpt, reference_number, case, channel, institution, document_type)
   * @alias module:model/Letter
   */
  function Letter() {
    _classCallCheck(this, Letter);

    Letter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Letter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Letter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Letter} obj Optional instance to populate.
     * @return {module:model/Letter} The populated <code>Letter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Letter();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }

        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _ApiClient["default"].convertToType(data['channel'], 'Number');
        }

        if (data.hasOwnProperty('final')) {
          obj['final'] = _ApiClient["default"].convertToType(data['final'], 'Boolean');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('referenceNumber')) {
          obj['referenceNumber'] = _ApiClient["default"].convertToType(data['referenceNumber'], 'String');
        }

        if (data.hasOwnProperty('institution')) {
          obj['institution'] = _ApiClient["default"].convertToType(data['institution'], 'Number');
        }

        if (data.hasOwnProperty('case')) {
          obj['case'] = _ApiClient["default"].convertToType(data['case'], 'Number');
        }

        if (data.hasOwnProperty('attachments')) {
          obj['attachments'] = _ApiClient["default"].convertToType(data['attachments'], [File]);
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('documentType')) {
          obj['documentType'] = _ApiClient["default"].convertToType(data['documentType'], 'Number');
        }

        if (data.hasOwnProperty('createdOn')) {
          obj['createdOn'] = _ApiClient["default"].convertToType(data['createdOn'], 'Date');
        }

        if (data.hasOwnProperty('createdBy')) {
          obj['createdBy'] = _ApiClient["default"].convertToType(data['createdBy'], 'Number');
        }

        if (data.hasOwnProperty('modifiedOn')) {
          obj['modifiedOn'] = _ApiClient["default"].convertToType(data['modifiedOn'], 'Date');
        }

        if (data.hasOwnProperty('modifiedBy')) {
          obj['modifiedBy'] = _ApiClient["default"].convertToType(data['modifiedBy'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Letter;
}();
/**
 * @member {Number} id
 */


Letter.prototype['id'] = undefined;
/**
 * Direction for letter.
 * @member {module:model/Letter.DirectionEnum} direction
 */

Letter.prototype['direction'] = undefined;
/**
 * @member {Number} channel
 */

Letter.prototype['channel'] = undefined;
/**
 * Indicates whether the document has final content or is, for example, a draft
 * @member {Boolean} final
 */

Letter.prototype['final'] = undefined;
/**
 * Date of sending or receiving.
 * @member {Date} date
 */

Letter.prototype['date'] = undefined;
/**
 * Reference number of letter.
 * @member {String} referenceNumber
 */

Letter.prototype['referenceNumber'] = undefined;
/**
 * @member {Number} institution
 */

Letter.prototype['institution'] = undefined;
/**
 * @member {Number} case
 */

Letter.prototype['case'] = undefined;
/**
 * 
 * @member {Array.<File>} attachments
 */

Letter.prototype['attachments'] = undefined;
/**
 * Comment for letter.
 * @member {String} comment
 */

Letter.prototype['comment'] = undefined;
/**
 * @member {Number} documentType
 */

Letter.prototype['documentType'] = undefined;
/**
 * @member {Date} createdOn
 */

Letter.prototype['createdOn'] = undefined;
/**
 * @member {Number} createdBy
 */

Letter.prototype['createdBy'] = undefined;
/**
 * @member {Date} modifiedOn
 */

Letter.prototype['modifiedOn'] = undefined;
/**
 * @member {Number} modifiedBy
 */

Letter.prototype['modifiedBy'] = undefined;
/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */

Letter['DirectionEnum'] = {
  /**
   * value: "IN"
   * @const
   */
  "IN": "IN",

  /**
   * value: "OUT"
   * @const
   */
  "OUT": "OUT"
};
var _default = Letter;
exports["default"] = _default;