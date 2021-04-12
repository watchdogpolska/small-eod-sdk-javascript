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
 * The DocumentTypeAutocomplete model module.
 * @module model/DocumentTypeAutocomplete
 * @version 1.0.4
 */
var DocumentTypeAutocomplete = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DocumentTypeAutocomplete</code>.
   * DocumentType(id, name)
   * @alias module:model/DocumentTypeAutocomplete
   * @param name {String} Type of letter
   */
  function DocumentTypeAutocomplete(name) {
    _classCallCheck(this, DocumentTypeAutocomplete);

    DocumentTypeAutocomplete.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DocumentTypeAutocomplete, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>DocumentTypeAutocomplete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentTypeAutocomplete} obj Optional instance to populate.
     * @return {module:model/DocumentTypeAutocomplete} The populated <code>DocumentTypeAutocomplete</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DocumentTypeAutocomplete();

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

  return DocumentTypeAutocomplete;
}();
/**
 * Type of letter
 * @member {String} name
 */


DocumentTypeAutocomplete.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

DocumentTypeAutocomplete.prototype['id'] = undefined;
var _default = DocumentTypeAutocomplete;
exports["default"] = _default;