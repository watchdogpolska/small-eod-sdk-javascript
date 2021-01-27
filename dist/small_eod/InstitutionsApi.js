"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20012"));

var _Institution = _interopRequireDefault(require("../model/Institution"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Institutions service.
* @module small_eod/InstitutionsApi
* @version 1.0.4
*/
var InstitutionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InstitutionsApi. 
  * @alias module:small_eod/InstitutionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InstitutionsApi(apiClient) {
    _classCallCheck(this, InstitutionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/Institution} data 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Institution} and HTTP response
   */


  _createClass(InstitutionsApi, [{
    key: "institutionsCreateWithHttpInfo",
    value: function institutionsCreateWithHttpInfo(data) {
      var postBody = data; // verify the required parameter 'data' is set

      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling institutionsCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Institution["default"];
      return this.apiClient.callApi('/institutions/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/Institution} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Institution}
     */

  }, {
    key: "institutionsCreate",
    value: function institutionsCreate(data) {
      return this.institutionsCreateWithHttpInfo(data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this institution.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "institutionsDeleteWithHttpInfo",
    value: function institutionsDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling institutionsDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/institutions/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this institution.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "institutionsDelete",
    value: function institutionsDelete(id) {
      return this.institutionsDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @param {String} opts.query Query filter. Currently filtering by name.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20012} and HTTP response
     */

  }, {
    key: "institutionsListWithHttpInfo",
    value: function institutionsListWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'ordering': opts['ordering'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'query': opts['query']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/institutions/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @param {String} opts.query Query filter. Currently filtering by name.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20012}
     */

  }, {
    key: "institutionsList",
    value: function institutionsList(opts) {
      return this.institutionsListWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this institution.
     * @param {module:model/Institution} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Institution} and HTTP response
     */

  }, {
    key: "institutionsPartialUpdateWithHttpInfo",
    value: function institutionsPartialUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling institutionsPartialUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling institutionsPartialUpdate");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Institution["default"];
      return this.apiClient.callApi('/institutions/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this institution.
     * @param {module:model/Institution} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Institution}
     */

  }, {
    key: "institutionsPartialUpdate",
    value: function institutionsPartialUpdate(id, data) {
      return this.institutionsPartialUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this institution.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Institution} and HTTP response
     */

  }, {
    key: "institutionsReadWithHttpInfo",
    value: function institutionsReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling institutionsRead");
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
      var returnType = _Institution["default"];
      return this.apiClient.callApi('/institutions/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this institution.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Institution}
     */

  }, {
    key: "institutionsRead",
    value: function institutionsRead(id) {
      return this.institutionsReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this institution.
     * @param {module:model/Institution} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Institution} and HTTP response
     */

  }, {
    key: "institutionsUpdateWithHttpInfo",
    value: function institutionsUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling institutionsUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling institutionsUpdate");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Institution["default"];
      return this.apiClient.callApi('/institutions/{id}/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this institution.
     * @param {module:model/Institution} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Institution}
     */

  }, {
    key: "institutionsUpdate",
    value: function institutionsUpdate(id, data) {
      return this.institutionsUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return InstitutionsApi;
}();

exports["default"] = InstitutionsApi;