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
 * The Note model module.
 * @module model/Note
 * @version 1.0.4
 */
var Note = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Note</code>.
   * Note(id, modified_on, created_on, created_by, modified_by, comment, case)
   * @alias module:model/Note
   * @param _case {Number} Related case.
   * @param comment {String} 
   */
  function Note(_case, comment) {
    _classCallCheck(this, Note);

    Note.initialize(this, _case, comment);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Note, null, [{
    key: "initialize",
    value: function initialize(obj, _case, comment) {
      obj['case'] = _case;
      obj['comment'] = comment;
    }
    /**
     * Constructs a <code>Note</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Note} obj Optional instance to populate.
     * @return {module:model/Note} The populated <code>Note</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Note();

        if (data.hasOwnProperty('case')) {
          obj['case'] = _ApiClient["default"].convertToType(data['case'], 'Number');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Note;
}();
/**
 * Related case.
 * @member {Number} case
 */


Note.prototype['case'] = undefined;
/**
 * @member {String} comment
 */

Note.prototype['comment'] = undefined;
/**
 * @member {Number} id
 */

Note.prototype['id'] = undefined;
var _default = Note;
exports["default"] = _default;