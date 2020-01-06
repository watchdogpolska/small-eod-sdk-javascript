# SmallEodClient.CollectionApi

All URIs are relative to *https://small-eod.siecobywatelska.pl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCollection**](CollectionApi.md#createCollection) | **POST** /collection | Create a collection
[**deleteCollection**](CollectionApi.md#deleteCollection) | **DELETE** /collection/{collectionId} | 
[**listCollection**](CollectionApi.md#listCollection) | **GET** /collection | List all collections
[**showCaseByCollection**](CollectionApi.md#showCaseByCollection) | **GET** /collection/{collectionId}/case | Cases match query for a specific collection
[**showCollectionById**](CollectionApi.md#showCollectionById) | **GET** /collection/{collectionId} | Info for a specific collection
[**showEventCaseByCollection**](CollectionApi.md#showEventCaseByCollection) | **GET** /collection/{collectionId}/case/{caseId}/event | Events of case match query for a specific collection
[**showLetterCaseByCollection**](CollectionApi.md#showLetterCaseByCollection) | **GET** /collection/{collectionId}/case/{caseId}/letter | Letters of cases match query for a specific collection
[**showNoteCaseByCollection**](CollectionApi.md#showNoteCaseByCollection) | **GET** /collection/{collectionId}/case/{caseId}/note | Notes of case match query for a specific collection
[**updateCollectionById**](CollectionApi.md#updateCollectionById) | **PATCH** /collection/{collectionId} | Updated collection



## createCollection

> Collection createCollection(collection)

Create a collection

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CollectionApi();
var collection = new SmallEodClient.Collection(); // Collection | New collection
apiInstance.createCollection(collection).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection** | [**Collection**](Collection.md)| New collection | 

### Return type

[**Collection**](Collection.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCollection

> deleteCollection(collectionId)



Deletes a single collection based on the ID supplied

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CollectionApi();
var collectionId = 789; // Number | The id of the collection to delete
apiInstance.deleteCollection(collectionId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **Number**| The id of the collection to delete | 

### Return type

null (empty response body)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCollection

> [Collection] listCollection(opts)

List all collections

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CollectionApi();
var opts = {
  'limit': 56, // Number | How many items to return at one time (max 100)
  'offset': 56, // Number | How many items skip in return
  '_case': 56 // Number | Case ID
};
apiInstance.listCollection(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many items to return at one time (max 100) | [optional] 
 **offset** | **Number**| How many items skip in return | [optional] 
 **_case** | **Number**| Case ID | [optional] 

### Return type

[**[Collection]**](Collection.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showCaseByCollection

> ModelCase showCaseByCollection(collectionId)

Cases match query for a specific collection

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CollectionApi();
var collectionId = 3.4; // Number | The id of the collection to retrieve
apiInstance.showCaseByCollection(collectionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **Number**| The id of the collection to retrieve | 

### Return type

[**ModelCase**](ModelCase.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showCollectionById

> Collection showCollectionById(collectionId)

Info for a specific collection

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CollectionApi();
var collectionId = 3.4; // Number | The id of the collection to retrieve
apiInstance.showCollectionById(collectionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **Number**| The id of the collection to retrieve | 

### Return type

[**Collection**](Collection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showEventCaseByCollection

> Event showEventCaseByCollection(collectionId, caseId)

Events of case match query for a specific collection

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CollectionApi();
var collectionId = 3.4; // Number | The id of the collection to retrieve
var caseId = 3.4; // Number | The id of the collection to retrieve
apiInstance.showEventCaseByCollection(collectionId, caseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **Number**| The id of the collection to retrieve | 
 **caseId** | **Number**| The id of the collection to retrieve | 

### Return type

[**Event**](Event.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showLetterCaseByCollection

> Letter showLetterCaseByCollection(collectionId, caseId)

Letters of cases match query for a specific collection

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CollectionApi();
var collectionId = 3.4; // Number | The id of the collection to retrieve
var caseId = 3.4; // Number | The id of the collection to retrieve
apiInstance.showLetterCaseByCollection(collectionId, caseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **Number**| The id of the collection to retrieve | 
 **caseId** | **Number**| The id of the collection to retrieve | 

### Return type

[**Letter**](Letter.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showNoteCaseByCollection

> Letter showNoteCaseByCollection(collectionId, caseId)

Notes of case match query for a specific collection

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CollectionApi();
var collectionId = 3.4; // Number | The id of the collection to retrieve
var caseId = 3.4; // Number | The id of the collection to retrieve
apiInstance.showNoteCaseByCollection(collectionId, caseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **Number**| The id of the collection to retrieve | 
 **caseId** | **Number**| The id of the collection to retrieve | 

### Return type

[**Letter**](Letter.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCollectionById

> Collection updateCollectionById(collectionId, collection)

Updated collection

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CollectionApi();
var collectionId = 3.4; // Number | The id of the collection to modify
var collection = new SmallEodClient.Collection(); // Collection | Updated collection
apiInstance.updateCollectionById(collectionId, collection).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **Number**| The id of the collection to modify | 
 **collection** | [**Collection**](Collection.md)| Updated collection | 

### Return type

[**Collection**](Collection.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

