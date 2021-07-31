"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FeatureOption = _interopRequireDefault(require("../model/FeatureOption"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20021"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* FeatureOptions service.
* @module small_eod/FeatureOptionsApi
* @version 1.0.4
*/
var FeatureOptionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FeatureOptionsApi. 
  * @alias module:small_eod/FeatureOptionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FeatureOptionsApi(apiClient) {
    _classCallCheck(this, FeatureOptionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/FeatureOption} data 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FeatureOption} and HTTP response
   */


  _createClass(FeatureOptionsApi, [{
    key: "featureOptionsCreateWithHttpInfo",
    value: function featureOptionsCreateWithHttpInfo(data) {
      var postBody = data; // verify the required parameter 'data' is set

      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling featureOptionsCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FeatureOption["default"];
      return this.apiClient.callApi('/feature_options/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/FeatureOption} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FeatureOption}
     */

  }, {
    key: "featureOptionsCreate",
    value: function featureOptionsCreate(data) {
      return this.featureOptionsCreateWithHttpInfo(data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this feature option.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "featureOptionsDeleteWithHttpInfo",
    value: function featureOptionsDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling featureOptionsDelete");
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
      return this.apiClient.callApi('/feature_options/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this feature option.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "featureOptionsDelete",
    value: function featureOptionsDelete(id) {
      return this.featureOptionsDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.query 
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20021} and HTTP response
     */

  }, {
    key: "featureOptionsListWithHttpInfo",
    value: function featureOptionsListWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'ordering': opts['ordering'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/feature_options/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.query 
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20021}
     */

  }, {
    key: "featureOptionsList",
    value: function featureOptionsList(opts) {
      return this.featureOptionsListWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this feature option.
     * @param {module:model/FeatureOption} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FeatureOption} and HTTP response
     */

  }, {
    key: "featureOptionsPartialUpdateWithHttpInfo",
    value: function featureOptionsPartialUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling featureOptionsPartialUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling featureOptionsPartialUpdate");
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
      var returnType = _FeatureOption["default"];
      return this.apiClient.callApi('/feature_options/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this feature option.
     * @param {module:model/FeatureOption} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FeatureOption}
     */

  }, {
    key: "featureOptionsPartialUpdate",
    value: function featureOptionsPartialUpdate(id, data) {
      return this.featureOptionsPartialUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this feature option.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FeatureOption} and HTTP response
     */

  }, {
    key: "featureOptionsReadWithHttpInfo",
    value: function featureOptionsReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling featureOptionsRead");
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
      var returnType = _FeatureOption["default"];
      return this.apiClient.callApi('/feature_options/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this feature option.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FeatureOption}
     */

  }, {
    key: "featureOptionsRead",
    value: function featureOptionsRead(id) {
      return this.featureOptionsReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this feature option.
     * @param {module:model/FeatureOption} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FeatureOption} and HTTP response
     */

  }, {
    key: "featureOptionsUpdateWithHttpInfo",
    value: function featureOptionsUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling featureOptionsUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling featureOptionsUpdate");
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
      var returnType = _FeatureOption["default"];
      return this.apiClient.callApi('/feature_options/{id}/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this feature option.
     * @param {module:model/FeatureOption} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FeatureOption}
     */

  }, {
    key: "featureOptionsUpdate",
    value: function featureOptionsUpdate(id, data) {
      return this.featureOptionsUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return FeatureOptionsApi;
}();

exports["default"] = FeatureOptionsApi;