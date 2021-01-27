"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Collection = _interopRequireDefault(require("../model/Collection"));

var _Event = _interopRequireDefault(require("../model/Event"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2005"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse2006"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse2007"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse2008"));

var _Letter = _interopRequireDefault(require("../model/Letter"));

var _ModelCase = _interopRequireDefault(require("../model/ModelCase"));

var _Note = _interopRequireDefault(require("../model/Note"));

var _TokenSet = _interopRequireDefault(require("../model/TokenSet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Collections service.
* @module small_eod/CollectionsApi
* @version 1.0.4
*/
var CollectionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CollectionsApi. 
  * @alias module:small_eod/CollectionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CollectionsApi(apiClient) {
    _classCallCheck(this, CollectionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {String} casePk 
   * @param {String} collectionPk 
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit Number of results to return per page.
   * @param {Number} opts.offset The initial index from which to return the results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
   */


  _createClass(CollectionsApi, [{
    key: "collectionsCasesEventsListWithHttpInfo",
    value: function collectionsCasesEventsListWithHttpInfo(casePk, collectionPk, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'casePk' is set

      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesEventsList");
      } // verify the required parameter 'collectionPk' is set


      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesEventsList");
      }

      var pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer', 'CollectionToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/collections/{collection_pk}/cases/{case_pk}/events/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
     */

  }, {
    key: "collectionsCasesEventsList",
    value: function collectionsCasesEventsList(casePk, collectionPk, opts) {
      return this.collectionsCasesEventsListWithHttpInfo(casePk, collectionPk, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */

  }, {
    key: "collectionsCasesEventsReadWithHttpInfo",
    value: function collectionsCasesEventsReadWithHttpInfo(casePk, collectionPk, id) {
      var postBody = null; // verify the required parameter 'casePk' is set

      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesEventsRead");
      } // verify the required parameter 'collectionPk' is set


      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesEventsRead");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsCasesEventsRead");
      }

      var pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer', 'CollectionToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Event["default"];
      return this.apiClient.callApi('/collections/{collection_pk}/cases/{case_pk}/events/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */

  }, {
    key: "collectionsCasesEventsRead",
    value: function collectionsCasesEventsRead(casePk, collectionPk, id) {
      return this.collectionsCasesEventsReadWithHttpInfo(casePk, collectionPk, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
     */

  }, {
    key: "collectionsCasesLettersListWithHttpInfo",
    value: function collectionsCasesLettersListWithHttpInfo(casePk, collectionPk, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'casePk' is set

      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesLettersList");
      } // verify the required parameter 'collectionPk' is set


      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesLettersList");
      }

      var pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer', 'CollectionToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4["default"];
      return this.apiClient.callApi('/collections/{collection_pk}/cases/{case_pk}/letters/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
     */

  }, {
    key: "collectionsCasesLettersList",
    value: function collectionsCasesLettersList(casePk, collectionPk, opts) {
      return this.collectionsCasesLettersListWithHttpInfo(casePk, collectionPk, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
     */

  }, {
    key: "collectionsCasesLettersReadWithHttpInfo",
    value: function collectionsCasesLettersReadWithHttpInfo(casePk, collectionPk, id) {
      var postBody = null; // verify the required parameter 'casePk' is set

      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesLettersRead");
      } // verify the required parameter 'collectionPk' is set


      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesLettersRead");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsCasesLettersRead");
      }

      var pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer', 'CollectionToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Letter["default"];
      return this.apiClient.callApi('/collections/{collection_pk}/cases/{case_pk}/letters/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */

  }, {
    key: "collectionsCasesLettersRead",
    value: function collectionsCasesLettersRead(casePk, collectionPk, id) {
      return this.collectionsCasesLettersReadWithHttpInfo(casePk, collectionPk, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */

  }, {
    key: "collectionsCasesListWithHttpInfo",
    value: function collectionsCasesListWithHttpInfo(collectionPk, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'collectionPk' is set

      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesList");
      }

      var pathParams = {
        'collection_pk': collectionPk
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer', 'CollectionToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/collections/{collection_pk}/cases/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */

  }, {
    key: "collectionsCasesList",
    value: function collectionsCasesList(collectionPk, opts) {
      return this.collectionsCasesListWithHttpInfo(collectionPk, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2008} and HTTP response
     */

  }, {
    key: "collectionsCasesNotesListWithHttpInfo",
    value: function collectionsCasesNotesListWithHttpInfo(casePk, collectionPk, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'casePk' is set

      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesNotesList");
      } // verify the required parameter 'collectionPk' is set


      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesNotesList");
      }

      var pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer', 'CollectionToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/collections/{collection_pk}/cases/{case_pk}/notes/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2008}
     */

  }, {
    key: "collectionsCasesNotesList",
    value: function collectionsCasesNotesList(casePk, collectionPk, opts) {
      return this.collectionsCasesNotesListWithHttpInfo(casePk, collectionPk, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Note} and HTTP response
     */

  }, {
    key: "collectionsCasesNotesReadWithHttpInfo",
    value: function collectionsCasesNotesReadWithHttpInfo(casePk, collectionPk, id) {
      var postBody = null; // verify the required parameter 'casePk' is set

      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesNotesRead");
      } // verify the required parameter 'collectionPk' is set


      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesNotesRead");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsCasesNotesRead");
      }

      var pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer', 'CollectionToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Note["default"];
      return this.apiClient.callApi('/collections/{collection_pk}/cases/{case_pk}/notes/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Note}
     */

  }, {
    key: "collectionsCasesNotesRead",
    value: function collectionsCasesNotesRead(casePk, collectionPk, id) {
      return this.collectionsCasesNotesReadWithHttpInfo(casePk, collectionPk, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelCase} and HTTP response
     */

  }, {
    key: "collectionsCasesReadWithHttpInfo",
    value: function collectionsCasesReadWithHttpInfo(collectionPk, id) {
      var postBody = null; // verify the required parameter 'collectionPk' is set

      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesRead");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsCasesRead");
      }

      var pathParams = {
        'collection_pk': collectionPk,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer', 'CollectionToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelCase["default"];
      return this.apiClient.callApi('/collections/{collection_pk}/cases/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelCase}
     */

  }, {
    key: "collectionsCasesRead",
    value: function collectionsCasesRead(collectionPk, id) {
      return this.collectionsCasesReadWithHttpInfo(collectionPk, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */

  }, {
    key: "collectionsCreateWithHttpInfo",
    value: function collectionsCreateWithHttpInfo(data) {
      var postBody = data; // verify the required parameter 'data' is set

      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling collectionsCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Collection["default"];
      return this.apiClient.callApi('/collections/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */

  }, {
    key: "collectionsCreate",
    value: function collectionsCreate(data) {
      return this.collectionsCreateWithHttpInfo(data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "collectionsDeleteWithHttpInfo",
    value: function collectionsDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsDelete");
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
      return this.apiClient.callApi('/collections/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "collectionsDelete",
    value: function collectionsDelete(id) {
      return this.collectionsDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */

  }, {
    key: "collectionsListWithHttpInfo",
    value: function collectionsListWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/collections/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */

  }, {
    key: "collectionsList",
    value: function collectionsList(opts) {
      return this.collectionsListWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */

  }, {
    key: "collectionsPartialUpdateWithHttpInfo",
    value: function collectionsPartialUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsPartialUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling collectionsPartialUpdate");
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
      var returnType = _Collection["default"];
      return this.apiClient.callApi('/collections/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */

  }, {
    key: "collectionsPartialUpdate",
    value: function collectionsPartialUpdate(id, data) {
      return this.collectionsPartialUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */

  }, {
    key: "collectionsReadWithHttpInfo",
    value: function collectionsReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsRead");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer', 'CollectionToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Collection["default"];
      return this.apiClient.callApi('/collections/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */

  }, {
    key: "collectionsRead",
    value: function collectionsRead(id) {
      return this.collectionsReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} collectionPk 
     * @param {module:model/TokenSet} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenSet} and HTTP response
     */

  }, {
    key: "collectionsTokensCreateWithHttpInfo",
    value: function collectionsTokensCreateWithHttpInfo(collectionPk, data) {
      var postBody = data; // verify the required parameter 'collectionPk' is set

      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsTokensCreate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling collectionsTokensCreate");
      }

      var pathParams = {
        'collection_pk': collectionPk
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TokenSet["default"];
      return this.apiClient.callApi('/collections/{collection_pk}/tokens/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} collectionPk 
     * @param {module:model/TokenSet} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenSet}
     */

  }, {
    key: "collectionsTokensCreate",
    value: function collectionsTokensCreate(collectionPk, data) {
      return this.collectionsTokensCreateWithHttpInfo(collectionPk, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */

  }, {
    key: "collectionsUpdateWithHttpInfo",
    value: function collectionsUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling collectionsUpdate");
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
      var returnType = _Collection["default"];
      return this.apiClient.callApi('/collections/{id}/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */

  }, {
    key: "collectionsUpdate",
    value: function collectionsUpdate(id, data) {
      return this.collectionsUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CollectionsApi;
}();

exports["default"] = CollectionsApi;