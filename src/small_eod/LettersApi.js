/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse20013 from '../model/InlineResponse20013';
import InlineResponse2007 from '../model/InlineResponse2007';
import Letter from '../model/Letter';
import SignRequest from '../model/SignRequest';

/**
* Letters service.
* @module small_eod/LettersApi
* @version 1.0.4
*/
export default class LettersApi {

    /**
    * Constructs a new LettersApi. 
    * @alias module:small_eod/LettersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {module:model/Letter} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
     */
    lettersCreateWithHttpInfo(data) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Letter;
      return this.apiClient.callApi(
        '/letters/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {module:model/Letter} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */
    lettersCreate(data) {
      return this.lettersCreateWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    lettersDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/letters/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    lettersDelete(id) {
      return this.lettersDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} letterPk 
     * @param {File} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    lettersFilesCreateWithHttpInfo(letterPk, data) {
      let postBody = data;
      // verify the required parameter 'letterPk' is set
      if (letterPk === undefined || letterPk === null) {
        throw new Error("Missing the required parameter 'letterPk' when calling lettersFilesCreate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersFilesCreate");
      }

      let pathParams = {
        'letter_pk': letterPk
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/letters/{letter_pk}/files/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} letterPk 
     * @param {File} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    lettersFilesCreate(letterPk, data) {
      return this.lettersFilesCreateWithHttpInfo(letterPk, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    lettersFilesDeleteWithHttpInfo(id, letterPk) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersFilesDelete");
      }
      // verify the required parameter 'letterPk' is set
      if (letterPk === undefined || letterPk === null) {
        throw new Error("Missing the required parameter 'letterPk' when calling lettersFilesDelete");
      }

      let pathParams = {
        'id': id,
        'letter_pk': letterPk
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/letters/{letter_pk}/files/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    lettersFilesDelete(id, letterPk) {
      return this.lettersFilesDeleteWithHttpInfo(id, letterPk)
        .then(function(response_and_data) {
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
    lettersFilesListWithHttpInfo(letterPk, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'letterPk' is set
      if (letterPk === undefined || letterPk === null) {
        throw new Error("Missing the required parameter 'letterPk' when calling lettersFilesList");
      }

      let pathParams = {
        'letter_pk': letterPk
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20013;
      return this.apiClient.callApi(
        '/letters/{letter_pk}/files/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} letterPk 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20013}
     */
    lettersFilesList(letterPk, opts) {
      return this.lettersFilesListWithHttpInfo(letterPk, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @param {File} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    lettersFilesPartialUpdateWithHttpInfo(id, letterPk, data) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersFilesPartialUpdate");
      }
      // verify the required parameter 'letterPk' is set
      if (letterPk === undefined || letterPk === null) {
        throw new Error("Missing the required parameter 'letterPk' when calling lettersFilesPartialUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersFilesPartialUpdate");
      }

      let pathParams = {
        'id': id,
        'letter_pk': letterPk
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/letters/{letter_pk}/files/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @param {File} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    lettersFilesPartialUpdate(id, letterPk, data) {
      return this.lettersFilesPartialUpdateWithHttpInfo(id, letterPk, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    lettersFilesReadWithHttpInfo(id, letterPk) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersFilesRead");
      }
      // verify the required parameter 'letterPk' is set
      if (letterPk === undefined || letterPk === null) {
        throw new Error("Missing the required parameter 'letterPk' when calling lettersFilesRead");
      }

      let pathParams = {
        'id': id,
        'letter_pk': letterPk
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/letters/{letter_pk}/files/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    lettersFilesRead(id, letterPk) {
      return this.lettersFilesReadWithHttpInfo(id, letterPk)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Generates pre-signed form data for uploading files to object storage.
     * @param {module:model/SignRequest} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SignRequest} and HTTP response
     */
    lettersFilesSignCreateWithHttpInfo(data) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersFilesSignCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SignRequest;
      return this.apiClient.callApi(
        '/letters/files/sign', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Generates pre-signed form data for uploading files to object storage.
     * @param {module:model/SignRequest} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SignRequest}
     */
    lettersFilesSignCreate(data) {
      return this.lettersFilesSignCreateWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @param {File} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    lettersFilesUpdateWithHttpInfo(id, letterPk, data) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersFilesUpdate");
      }
      // verify the required parameter 'letterPk' is set
      if (letterPk === undefined || letterPk === null) {
        throw new Error("Missing the required parameter 'letterPk' when calling lettersFilesUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersFilesUpdate");
      }

      let pathParams = {
        'id': id,
        'letter_pk': letterPk
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/letters/{letter_pk}/files/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @param {String} letterPk 
     * @param {File} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    lettersFilesUpdate(id, letterPk, data) {
      return this.lettersFilesUpdateWithHttpInfo(id, letterPk, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
     */
    lettersListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2007;
      return this.apiClient.callApi(
        '/letters/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
     */
    lettersList(opts) {
      return this.lettersListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @param {module:model/Letter} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
     */
    lettersPartialUpdateWithHttpInfo(id, data) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersPartialUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersPartialUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Letter;
      return this.apiClient.callApi(
        '/letters/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @param {module:model/Letter} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */
    lettersPartialUpdate(id, data) {
      return this.lettersPartialUpdateWithHttpInfo(id, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
     */
    lettersReadWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersRead");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Letter;
      return this.apiClient.callApi(
        '/letters/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */
    lettersRead(id) {
      return this.lettersReadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @param {module:model/Letter} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
     */
    lettersUpdateWithHttpInfo(id, data) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling lettersUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling lettersUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Letter;
      return this.apiClient.callApi(
        '/letters/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this letter.
     * @param {module:model/Letter} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */
    lettersUpdate(id, data) {
      return this.lettersUpdateWithHttpInfo(id, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
