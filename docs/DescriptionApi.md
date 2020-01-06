# SmallEod.DescriptionApi

All URIs are relative to *https://small-eod.siecobywatelska.pl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDescription**](DescriptionApi.md#createDescription) | **POST** /description | Create a description
[**deleteDescription**](DescriptionApi.md#deleteDescription) | **DELETE** /description/{descriptionId} | 
[**listDescription**](DescriptionApi.md#listDescription) | **GET** /description | List all descriptions
[**showDescriptionById**](DescriptionApi.md#showDescriptionById) | **GET** /description/{descriptionId} | Info for a specific description



## createDescription

> Description createDescription(description)

Create a description

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.DescriptionApi();
var description = new SmallEod.Description(); // Description | New description
apiInstance.createDescription(description).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | [**Description**](Description.md)| New description | 

### Return type

[**Description**](Description.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDescription

> deleteDescription(descriptionId)



Deletes a single description based on the ID supplied

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.DescriptionApi();
var descriptionId = 789; // Number | The id of the description to delete
apiInstance.deleteDescription(descriptionId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **descriptionId** | **Number**| The id of the description to delete | 

### Return type

null (empty response body)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDescription

> [Description] listDescription(opts)

List all descriptions

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.DescriptionApi();
var opts = {
  'limit': 56, // Number | How many items to return at one time (max 100)
  'offset': 56 // Number | How many items skip in return
};
apiInstance.listDescription(opts).then(function(data) {
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

[**[Description]**](Description.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showDescriptionById

> Description showDescriptionById(descriptionId)

Info for a specific description

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.DescriptionApi();
var descriptionId = 3.4; // Number | The id of the description to retrieve
apiInstance.showDescriptionById(descriptionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **descriptionId** | **Number**| The id of the description to retrieve | 

### Return type

[**Description**](Description.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

