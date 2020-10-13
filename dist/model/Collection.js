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
 * The Collection model module.
 * @module model/Collection
 * @version 1.0.4
 */
var Collection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Collection</code>.
   * @alias module:model/Collection
   * @param name {String} Collection's name.
   * @param expiredOn {Date} An expiration date of collection.
   * @param query {String} Query for collection.
   */
  function Collection(name, expiredOn, query) {
    _classCallCheck(this, Collection);

    Collection.initialize(this, name, expiredOn, query);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Collection, null, [{
    key: "initialize",
    value: function initialize(obj, name, expiredOn, query) {
      obj['name'] = name;
      obj['expiredOn'] = expiredOn;
      obj['query'] = query;
    }
    /**
     * Constructs a <code>Collection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collection} obj Optional instance to populate.
     * @return {module:model/Collection} The populated <code>Collection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Collection();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('expiredOn')) {
          obj['expiredOn'] = _ApiClient["default"].convertToType(data['expiredOn'], 'Date');
        }

        if (data.hasOwnProperty('query')) {
          obj['query'] = _ApiClient["default"].convertToType(data['query'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('public')) {
          obj['public'] = _ApiClient["default"].convertToType(data['public'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Collection;
}();
/**
 * Collection's name.
 * @member {String} name
 */


Collection.prototype['name'] = undefined;
/**
 * An expiration date of collection.
 * @member {Date} expiredOn
 */

Collection.prototype['expiredOn'] = undefined;
/**
 * Query for collection.
 * @member {String} query
 */

Collection.prototype['query'] = undefined;
/**
 * @member {Number} id
 */

Collection.prototype['id'] = undefined;
/**
 * Comment for collection.
 * @member {String} comment
 */

Collection.prototype['comment'] = undefined;
/**
 * Make public.
 * @member {Boolean} public
 */

Collection.prototype['public'] = undefined;
var _default = Collection;
exports["default"] = _default;