"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AdministrativeUnit = _interopRequireDefault(require("../model/AdministrativeUnit"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* AdministrativeUnits service.
* @module small_eod/AdministrativeUnitsApi
* @version 1.0.4
*/
var AdministrativeUnitsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AdministrativeUnitsApi. 
  * @alias module:small_eod/AdministrativeUnitsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AdministrativeUnitsApi(apiClient) {
    _classCallCheck(this, AdministrativeUnitsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit Number of results to return per page.
   * @param {Number} opts.offset The initial index from which to return the results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
   */


  _createClass(AdministrativeUnitsApi, [{
    key: "administrativeUnitsListWithHttpInfo",
    value: function administrativeUnitsListWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/administrative_units/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "administrativeUnitsList",
    value: function administrativeUnitsList(opts) {
      return this.administrativeUnitsListWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id A unique value identifying this administrative unit.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdministrativeUnit} and HTTP response
     */

  }, {
    key: "administrativeUnitsReadWithHttpInfo",
    value: function administrativeUnitsReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling administrativeUnitsRead");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AdministrativeUnit["default"];
      return this.apiClient.callApi('/administrative_units/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id A unique value identifying this administrative unit.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdministrativeUnit}
     */

  }, {
    key: "administrativeUnitsRead",
    value: function administrativeUnitsRead(id) {
      return this.administrativeUnitsReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AdministrativeUnitsApi;
}();

exports["default"] = AdministrativeUnitsApi;