"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Channel = _interopRequireDefault(require("../model/Channel"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2003"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Channels service.
* @module small_eod/ChannelsApi
* @version 1.0.4
*/
var ChannelsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ChannelsApi. 
  * @alias module:small_eod/ChannelsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ChannelsApi(apiClient) {
    _classCallCheck(this, ChannelsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/Channel} data 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Channel} and HTTP response
   */


  _createClass(ChannelsApi, [{
    key: "channelsCreateWithHttpInfo",
    value: function channelsCreateWithHttpInfo(data) {
      var postBody = data; // verify the required parameter 'data' is set

      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling channelsCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Channel["default"];
      return this.apiClient.callApi('/channels/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/Channel} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Channel}
     */

  }, {
    key: "channelsCreate",
    value: function channelsCreate(data) {
      return this.channelsCreateWithHttpInfo(data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "channelsDeleteWithHttpInfo",
    value: function channelsDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling channelsDelete");
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
      return this.apiClient.callApi('/channels/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "channelsDelete",
    value: function channelsDelete(id) {
      return this.channelsDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */

  }, {
    key: "channelsListWithHttpInfo",
    value: function channelsListWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
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
      return this.apiClient.callApi('/channels/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */

  }, {
    key: "channelsList",
    value: function channelsList(opts) {
      return this.channelsListWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @param {module:model/Channel} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Channel} and HTTP response
     */

  }, {
    key: "channelsPartialUpdateWithHttpInfo",
    value: function channelsPartialUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling channelsPartialUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling channelsPartialUpdate");
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
      var returnType = _Channel["default"];
      return this.apiClient.callApi('/channels/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @param {module:model/Channel} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Channel}
     */

  }, {
    key: "channelsPartialUpdate",
    value: function channelsPartialUpdate(id, data) {
      return this.channelsPartialUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Channel} and HTTP response
     */

  }, {
    key: "channelsReadWithHttpInfo",
    value: function channelsReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling channelsRead");
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
      var returnType = _Channel["default"];
      return this.apiClient.callApi('/channels/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Channel}
     */

  }, {
    key: "channelsRead",
    value: function channelsRead(id) {
      return this.channelsReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @param {module:model/Channel} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Channel} and HTTP response
     */

  }, {
    key: "channelsUpdateWithHttpInfo",
    value: function channelsUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling channelsUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling channelsUpdate");
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
      var returnType = _Channel["default"];
      return this.apiClient.callApi('/channels/{id}/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @param {module:model/Channel} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Channel}
     */

  }, {
    key: "channelsUpdate",
    value: function channelsUpdate(id, data) {
      return this.channelsUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ChannelsApi;
}();

exports["default"] = ChannelsApi;