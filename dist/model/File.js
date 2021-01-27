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
 * The File model module.
 * @module model/File
 * @version 1.0.4
 */
var File = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>File</code>.
   * File(id, path, name, letter)
   * @alias module:model/File
   * @param path {String} Path to file.
   * @param name {String} Name of file.
   */
  function File(path, name) {
    _classCallCheck(this, File);

    File.initialize(this, path, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(File, null, [{
    key: "initialize",
    value: function initialize(obj, path, name) {
      obj['path'] = path;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>File</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/File} obj Optional instance to populate.
     * @return {module:model/File} The populated <code>File</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new File();

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('downloadUrl')) {
          obj['downloadUrl'] = _ApiClient["default"].convertToType(data['downloadUrl'], 'String');
        }

        if (data.hasOwnProperty('letter')) {
          obj['letter'] = _ApiClient["default"].convertToType(data['letter'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return File;
}();
/**
 * Path to file.
 * @member {String} path
 */


File.prototype['path'] = undefined;
/**
 * Name of file.
 * @member {String} name
 */

File.prototype['name'] = undefined;
/**
 * @member {Number} id
 */

File.prototype['id'] = undefined;
/**
 * @member {String} downloadUrl
 */

File.prototype['downloadUrl'] = undefined;
/**
 * @member {Number} letter
 */

File.prototype['letter'] = undefined;
var _default = File;
exports["default"] = _default;