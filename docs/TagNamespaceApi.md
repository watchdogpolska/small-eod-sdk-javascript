# SmallEod.TagNamespaceApi

All URIs are relative to *https://small-eod.siecobywatelska.pl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTagNamespace**](TagNamespaceApi.md#createTagNamespace) | **POST** /tagNamespace | Create a tag namespace
[**deleteTagNamespace**](TagNamespaceApi.md#deleteTagNamespace) | **DELETE** /tagNamespace/{tagNamespaceId} | 
[**listTagNamespace**](TagNamespaceApi.md#listTagNamespace) | **GET** /tagNamespace | List all tag namespaces
[**showTagNamespaceById**](TagNamespaceApi.md#showTagNamespaceById) | **GET** /tagNamespace/{tagNamespaceId} | Info for a specific tag namespace



## createTagNamespace

> TagNamespace createTagNamespace(tagNamespace)

Create a tag namespace

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.TagNamespaceApi();
var tagNamespace = new SmallEod.TagNamespace(); // TagNamespace | New tag namespace
apiInstance.createTagNamespace(tagNamespace).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagNamespace** | [**TagNamespace**](TagNamespace.md)| New tag namespace | 

### Return type

[**TagNamespace**](TagNamespace.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTagNamespace

> deleteTagNamespace(tagNamespaceId)



Deletes a single tag namespace based on the ID supplied

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.TagNamespaceApi();
var tagNamespaceId = 789; // Number | The id of the tag namespace to delete
apiInstance.deleteTagNamespace(tagNamespaceId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagNamespaceId** | **Number**| The id of the tag namespace to delete | 

### Return type

null (empty response body)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTagNamespace

> [TagNamespace] listTagNamespace(opts)

List all tag namespaces

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.TagNamespaceApi();
var opts = {
  'limit': 56, // Number | How many items to return at one time (max 100)
  'offset': 56 // Number | How many items skip in return
};
apiInstance.listTagNamespace(opts).then(function(data) {
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

### Return type

[**[TagNamespace]**](TagNamespace.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showTagNamespaceById

> TagNamespace showTagNamespaceById(tagNamespaceId)

Info for a specific tag namespace

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.TagNamespaceApi();
var tagNamespaceId = 3.4; // Number | The id of the tag namespace to retrieve
apiInstance.showTagNamespaceById(tagNamespaceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagNamespaceId** | **Number**| The id of the tag namespace to retrieve | 

### Return type

[**TagNamespace**](TagNamespace.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

