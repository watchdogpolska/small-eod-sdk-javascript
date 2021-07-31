"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Event = _interopRequireDefault(require("../model/Event"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20017"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Events service.
* @module small_eod/EventsApi
* @version 1.0.4
*/
var EventsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EventsApi. 
  * @alias module:small_eod/EventsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EventsApi(apiClient) {
    _classCallCheck(this, EventsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/Event} data 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
   */


  _createClass(EventsApi, [{
    key: "eventsCreateWithHttpInfo",
    value: function eventsCreateWithHttpInfo(data) {
      var postBody = data; // verify the required parameter 'data' is set

      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling eventsCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Event["default"];
      return this.apiClient.callApi('/events/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/Event} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */

  }, {
    key: "eventsCreate",
    value: function eventsCreate(data) {
      return this.eventsCreateWithHttpInfo(data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this event.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "eventsDeleteWithHttpInfo",
    value: function eventsDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsDelete");
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
      return this.apiClient.callApi('/events/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this event.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "eventsDelete",
    value: function eventsDelete(id) {
      return this.eventsDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.query 
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "eventsIcalWithHttpInfo",
    value: function eventsIcalWithHttpInfo(opts) {
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/events/ical/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.query 
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "eventsIcal",
    value: function eventsIcal(opts) {
      return this.eventsIcalWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.query 
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20017} and HTTP response
     */

  }, {
    key: "eventsListWithHttpInfo",
    value: function eventsListWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/events/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.query 
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20017}
     */

  }, {
    key: "eventsList",
    value: function eventsList(opts) {
      return this.eventsListWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this event.
     * @param {module:model/Event} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */

  }, {
    key: "eventsPartialUpdateWithHttpInfo",
    value: function eventsPartialUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsPartialUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling eventsPartialUpdate");
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
      var returnType = _Event["default"];
      return this.apiClient.callApi('/events/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this event.
     * @param {module:model/Event} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */

  }, {
    key: "eventsPartialUpdate",
    value: function eventsPartialUpdate(id, data) {
      return this.eventsPartialUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this event.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */

  }, {
    key: "eventsReadWithHttpInfo",
    value: function eventsReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsRead");
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
      var returnType = _Event["default"];
      return this.apiClient.callApi('/events/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this event.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */

  }, {
    key: "eventsRead",
    value: function eventsRead(id) {
      return this.eventsReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this event.
     * @param {module:model/Event} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */

  }, {
    key: "eventsUpdateWithHttpInfo",
    value: function eventsUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling eventsUpdate");
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
      var returnType = _Event["default"];
      return this.apiClient.callApi('/events/{id}/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this event.
     * @param {module:model/Event} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */

  }, {
    key: "eventsUpdate",
    value: function eventsUpdate(id, data) {
      return this.eventsUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EventsApi;
}();

exports["default"] = EventsApi;