"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20013"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2007"));

var _Letter = _interopRequireDefault(require("../model/Letter"));

var _SignRequest = _interopRequireDefault(require("../model/SignRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Letters service.
* @module small_eod/LettersApi
* @version 1.0.4
*/
var LettersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LettersApi. 
  * @alias module:small_eod/LettersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LettersApi(apiClient) {
    _classCallCheck(this, LettersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/Letter} data 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
   */


  _createClass(LettersApi, [{
    key: "lettersCreateWithHttpInfo",
    value: function lettersCreateWithHttpInfo(data) {
      var postBody = data; // verify the required parameter 'data' is set

      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Letter["default"];
      return this.apiClient.callApi('/letters/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/Letter} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */

  }, {
    key: "lettersCreate",
    value: function lettersCreate(data) {
      return this.lettersCreateWithHttpInfo(data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "lettersDeleteWithHttpInfo",
    value: function lettersDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersDelete");
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
      return this.apiClient.callApi('/letters/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "lettersDelete",
    value: function lettersDelete(id) {
      return this.lettersDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} letterPk 
     * @param {File} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */

  }, {
    key: "lettersFilesCreateWithHttpInfo",
    value: function lettersFilesCreateWithHttpInfo(letterPk, data) {
      var postBody = data; // verify the required parameter 'letterPk' is set

      if (letterPk === undefined || letterPk === null) {
        throw new Error("Missing the required parameter 'letterPk' when calling lettersFilesCreate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersFilesCreate");
      }

      var pathParams = {
        'letter_pk': letterPk
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = File;
      return this.apiClient.callApi('/letters/{letter_pk}/files/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} letterPk 
     * @param {File} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: "lettersFilesCreate",
    value: function lettersFilesCreate(letterPk, data) {
      return this.lettersFilesCreateWithHttpInfo(letterPk, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "lettersFilesDeleteWithHttpInfo",
    value: function lettersFilesDeleteWithHttpInfo(id, letterPk) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersFilesDelete");
      } // verify the required parameter 'letterPk' is set


      if (letterPk === undefined || letterPk === null) {
        throw new Error("Missing the required parameter 'letterPk' when calling lettersFilesDelete");
      }

      var pathParams = {
        'id': id,
        'letter_pk': letterPk
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/letters/{letter_pk}/files/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "lettersFilesDelete",
    value: function lettersFilesDelete(id, letterPk) {
      return this.lettersFilesDeleteWithHttpInfo(id, letterPk).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} letterPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20013} and HTTP response
     */

  }, {
    key: "lettersFilesListWithHttpInfo",
    value: function lettersFilesListWithHttpInfo(letterPk, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'letterPk' is set

      if (letterPk === undefined || letterPk === null) {
        throw new Error("Missing the required parameter 'letterPk' when calling lettersFilesList");
      }

      var pathParams = {
        'letter_pk': letterPk
      };
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
      return this.apiClient.callApi('/letters/{letter_pk}/files/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} letterPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20013}
     */

  }, {
    key: "lettersFilesList",
    value: function lettersFilesList(letterPk, opts) {
      return this.lettersFilesListWithHttpInfo(letterPk, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @param {File} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */

  }, {
    key: "lettersFilesPartialUpdateWithHttpInfo",
    value: function lettersFilesPartialUpdateWithHttpInfo(id, letterPk, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersFilesPartialUpdate");
      } // verify the required parameter 'letterPk' is set


      if (letterPk === undefined || letterPk === null) {
        throw new Error("Missing the required parameter 'letterPk' when calling lettersFilesPartialUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersFilesPartialUpdate");
      }

      var pathParams = {
        'id': id,
        'letter_pk': letterPk
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = File;
      return this.apiClient.callApi('/letters/{letter_pk}/files/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @param {File} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: "lettersFilesPartialUpdate",
    value: function lettersFilesPartialUpdate(id, letterPk, data) {
      return this.lettersFilesPartialUpdateWithHttpInfo(id, letterPk, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */

  }, {
    key: "lettersFilesReadWithHttpInfo",
    value: function lettersFilesReadWithHttpInfo(id, letterPk) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersFilesRead");
      } // verify the required parameter 'letterPk' is set


      if (letterPk === undefined || letterPk === null) {
        throw new Error("Missing the required parameter 'letterPk' when calling lettersFilesRead");
      }

      var pathParams = {
        'id': id,
        'letter_pk': letterPk
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = File;
      return this.apiClient.callApi('/letters/{letter_pk}/files/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: "lettersFilesRead",
    value: function lettersFilesRead(id, letterPk) {
      return this.lettersFilesReadWithHttpInfo(id, letterPk).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generates pre-signed form data for uploading files to object storage.
     * @param {module:model/SignRequest} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SignRequest} and HTTP response
     */

  }, {
    key: "lettersFilesSignCreateWithHttpInfo",
    value: function lettersFilesSignCreateWithHttpInfo(data) {
      var postBody = data; // verify the required parameter 'data' is set

      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersFilesSignCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SignRequest["default"];
      return this.apiClient.callApi('/letters/files/sign', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generates pre-signed form data for uploading files to object storage.
     * @param {module:model/SignRequest} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SignRequest}
     */

  }, {
    key: "lettersFilesSignCreate",
    value: function lettersFilesSignCreate(data) {
      return this.lettersFilesSignCreateWithHttpInfo(data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @param {File} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */

  }, {
    key: "lettersFilesUpdateWithHttpInfo",
    value: function lettersFilesUpdateWithHttpInfo(id, letterPk, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersFilesUpdate");
      } // verify the required parameter 'letterPk' is set


      if (letterPk === undefined || letterPk === null) {
        throw new Error("Missing the required parameter 'letterPk' when calling lettersFilesUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersFilesUpdate");
      }

      var pathParams = {
        'id': id,
        'letter_pk': letterPk
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = File;
      return this.apiClient.callApi('/letters/{letter_pk}/files/{id}/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @param {File} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */

  }, {
    key: "lettersFilesUpdate",
    value: function lettersFilesUpdate(id, letterPk, data) {
      return this.lettersFilesUpdateWithHttpInfo(id, letterPk, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
     */

  }, {
    key: "lettersListWithHttpInfo",
    value: function lettersListWithHttpInfo(opts) {
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
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/letters/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
     */

  }, {
    key: "lettersList",
    value: function lettersList(opts) {
      return this.lettersListWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @param {module:model/Letter} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
     */

  }, {
    key: "lettersPartialUpdateWithHttpInfo",
    value: function lettersPartialUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersPartialUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersPartialUpdate");
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
      var returnType = _Letter["default"];
      return this.apiClient.callApi('/letters/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @param {module:model/Letter} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */

  }, {
    key: "lettersPartialUpdate",
    value: function lettersPartialUpdate(id, data) {
      return this.lettersPartialUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
     */

  }, {
    key: "lettersReadWithHttpInfo",
    value: function lettersReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersRead");
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
      var returnType = _Letter["default"];
      return this.apiClient.callApi('/letters/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */

  }, {
    key: "lettersRead",
    value: function lettersRead(id) {
      return this.lettersReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @param {module:model/Letter} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
     */

  }, {
    key: "lettersUpdateWithHttpInfo",
    value: function lettersUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersUpdate");
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
      var returnType = _Letter["default"];
      return this.apiClient.callApi('/letters/{id}/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @param {module:model/Letter} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */

  }, {
    key: "lettersUpdate",
    value: function lettersUpdate(id, data) {
      return this.lettersUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LettersApi;
}();

exports["default"] = LettersApi;