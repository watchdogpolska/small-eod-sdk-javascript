"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Feature = _interopRequireDefault(require("../model/Feature"));

var _FeatureOption = _interopRequireDefault(require("../model/FeatureOption"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20010"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse20011"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Features service.
* @module small_eod/FeaturesApi
* @version 1.0.4
*/
var FeaturesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FeaturesApi. 
  * @alias module:small_eod/FeaturesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FeaturesApi(apiClient) {
    _classCallCheck(this, FeaturesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * @param {module:model/Feature} data 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Feature} and HTTP response
   */


  _createClass(FeaturesApi, [{
    key: "featuresCreateWithHttpInfo",
    value: function featuresCreateWithHttpInfo(data) {
      var postBody = data; // verify the required parameter 'data' is set

      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling featuresCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Feature["default"];
      return this.apiClient.callApi('/features/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {module:model/Feature} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Feature}
     */

  }, {
    key: "featuresCreate",
    value: function featuresCreate(data) {
      return this.featuresCreateWithHttpInfo(data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this feature.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "featuresDeleteWithHttpInfo",
    value: function featuresDeleteWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling featuresDelete");
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
      return this.apiClient.callApi('/features/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this feature.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "featuresDelete",
    value: function featuresDelete(id) {
      return this.featuresDeleteWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} featurePk 
     * @param {module:model/FeatureOption} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FeatureOption} and HTTP response
     */

  }, {
    key: "featuresFeatureoptionCreateWithHttpInfo",
    value: function featuresFeatureoptionCreateWithHttpInfo(featurePk, data) {
      var postBody = data; // verify the required parameter 'featurePk' is set

      if (featurePk === undefined || featurePk === null) {
        throw new Error("Missing the required parameter 'featurePk' when calling featuresFeatureoptionCreate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling featuresFeatureoptionCreate");
      }

      var pathParams = {
        'feature_pk': featurePk
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FeatureOption["default"];
      return this.apiClient.callApi('/features/{feature_pk}/featureoption/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} featurePk 
     * @param {module:model/FeatureOption} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FeatureOption}
     */

  }, {
    key: "featuresFeatureoptionCreate",
    value: function featuresFeatureoptionCreate(featurePk, data) {
      return this.featuresFeatureoptionCreateWithHttpInfo(featurePk, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} featurePk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "featuresFeatureoptionDeleteWithHttpInfo",
    value: function featuresFeatureoptionDeleteWithHttpInfo(featurePk, id) {
      var postBody = null; // verify the required parameter 'featurePk' is set

      if (featurePk === undefined || featurePk === null) {
        throw new Error("Missing the required parameter 'featurePk' when calling featuresFeatureoptionDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling featuresFeatureoptionDelete");
      }

      var pathParams = {
        'feature_pk': featurePk,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/features/{feature_pk}/featureoption/{id}/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} featurePk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "featuresFeatureoptionDelete",
    value: function featuresFeatureoptionDelete(featurePk, id) {
      return this.featuresFeatureoptionDeleteWithHttpInfo(featurePk, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} featurePk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20011} and HTTP response
     */

  }, {
    key: "featuresFeatureoptionListWithHttpInfo",
    value: function featuresFeatureoptionListWithHttpInfo(featurePk, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'featurePk' is set

      if (featurePk === undefined || featurePk === null) {
        throw new Error("Missing the required parameter 'featurePk' when calling featuresFeatureoptionList");
      }

      var pathParams = {
        'feature_pk': featurePk
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
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/features/{feature_pk}/featureoption/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} featurePk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20011}
     */

  }, {
    key: "featuresFeatureoptionList",
    value: function featuresFeatureoptionList(featurePk, opts) {
      return this.featuresFeatureoptionListWithHttpInfo(featurePk, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} featurePk 
     * @param {String} id 
     * @param {module:model/FeatureOption} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FeatureOption} and HTTP response
     */

  }, {
    key: "featuresFeatureoptionPartialUpdateWithHttpInfo",
    value: function featuresFeatureoptionPartialUpdateWithHttpInfo(featurePk, id, data) {
      var postBody = data; // verify the required parameter 'featurePk' is set

      if (featurePk === undefined || featurePk === null) {
        throw new Error("Missing the required parameter 'featurePk' when calling featuresFeatureoptionPartialUpdate");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling featuresFeatureoptionPartialUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling featuresFeatureoptionPartialUpdate");
      }

      var pathParams = {
        'feature_pk': featurePk,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FeatureOption["default"];
      return this.apiClient.callApi('/features/{feature_pk}/featureoption/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} featurePk 
     * @param {String} id 
     * @param {module:model/FeatureOption} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FeatureOption}
     */

  }, {
    key: "featuresFeatureoptionPartialUpdate",
    value: function featuresFeatureoptionPartialUpdate(featurePk, id, data) {
      return this.featuresFeatureoptionPartialUpdateWithHttpInfo(featurePk, id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} featurePk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FeatureOption} and HTTP response
     */

  }, {
    key: "featuresFeatureoptionReadWithHttpInfo",
    value: function featuresFeatureoptionReadWithHttpInfo(featurePk, id) {
      var postBody = null; // verify the required parameter 'featurePk' is set

      if (featurePk === undefined || featurePk === null) {
        throw new Error("Missing the required parameter 'featurePk' when calling featuresFeatureoptionRead");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling featuresFeatureoptionRead");
      }

      var pathParams = {
        'feature_pk': featurePk,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FeatureOption["default"];
      return this.apiClient.callApi('/features/{feature_pk}/featureoption/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} featurePk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FeatureOption}
     */

  }, {
    key: "featuresFeatureoptionRead",
    value: function featuresFeatureoptionRead(featurePk, id) {
      return this.featuresFeatureoptionReadWithHttpInfo(featurePk, id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} featurePk 
     * @param {String} id 
     * @param {module:model/FeatureOption} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FeatureOption} and HTTP response
     */

  }, {
    key: "featuresFeatureoptionUpdateWithHttpInfo",
    value: function featuresFeatureoptionUpdateWithHttpInfo(featurePk, id, data) {
      var postBody = data; // verify the required parameter 'featurePk' is set

      if (featurePk === undefined || featurePk === null) {
        throw new Error("Missing the required parameter 'featurePk' when calling featuresFeatureoptionUpdate");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling featuresFeatureoptionUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling featuresFeatureoptionUpdate");
      }

      var pathParams = {
        'feature_pk': featurePk,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['Basic', 'Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FeatureOption["default"];
      return this.apiClient.callApi('/features/{feature_pk}/featureoption/{id}/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} featurePk 
     * @param {String} id 
     * @param {module:model/FeatureOption} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FeatureOption}
     */

  }, {
    key: "featuresFeatureoptionUpdate",
    value: function featuresFeatureoptionUpdate(featurePk, id, data) {
      return this.featuresFeatureoptionUpdateWithHttpInfo(featurePk, id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20010} and HTTP response
     */

  }, {
    key: "featuresListWithHttpInfo",
    value: function featuresListWithHttpInfo(opts) {
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
      return this.apiClient.callApi('/features/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20010}
     */

  }, {
    key: "featuresList",
    value: function featuresList(opts) {
      return this.featuresListWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this feature.
     * @param {module:model/Feature} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Feature} and HTTP response
     */

  }, {
    key: "featuresPartialUpdateWithHttpInfo",
    value: function featuresPartialUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling featuresPartialUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling featuresPartialUpdate");
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
      var returnType = _Feature["default"];
      return this.apiClient.callApi('/features/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this feature.
     * @param {module:model/Feature} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Feature}
     */

  }, {
    key: "featuresPartialUpdate",
    value: function featuresPartialUpdate(id, data) {
      return this.featuresPartialUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this feature.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Feature} and HTTP response
     */

  }, {
    key: "featuresReadWithHttpInfo",
    value: function featuresReadWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling featuresRead");
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
      var returnType = _Feature["default"];
      return this.apiClient.callApi('/features/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this feature.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Feature}
     */

  }, {
    key: "featuresRead",
    value: function featuresRead(id) {
      return this.featuresReadWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {Number} id A unique integer value identifying this feature.
     * @param {module:model/Feature} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Feature} and HTTP response
     */

  }, {
    key: "featuresUpdateWithHttpInfo",
    value: function featuresUpdateWithHttpInfo(id, data) {
      var postBody = data; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling featuresUpdate");
      } // verify the required parameter 'data' is set


      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling featuresUpdate");
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
      var returnType = _Feature["default"];
      return this.apiClient.callApi('/features/{id}/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {Number} id A unique integer value identifying this feature.
     * @param {module:model/Feature} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Feature}
     */

  }, {
    key: "featuresUpdate",
    value: function featuresUpdate(id, data) {
      return this.featuresUpdateWithHttpInfo(id, data).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return FeaturesApi;
}();

exports["default"] = FeaturesApi;