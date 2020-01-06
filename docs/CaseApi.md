# SmallEodClient.CaseApi

All URIs are relative to *https://small-eod.siecobywatelska.pl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCase**](CaseApi.md#createCase) | **POST** /case | Create a case
[**deleteCase**](CaseApi.md#deleteCase) | **DELETE** /case/{caseId} | 
[**listCase**](CaseApi.md#listCase) | **GET** /case | List all cases
[**showCaseById**](CaseApi.md#showCaseById) | **GET** /case/{caseId} | Info for a specific case
[**updateCaseById**](CaseApi.md#updateCaseById) | **PATCH** /case/{caseId} | Updated case



## createCase

> ModelCase createCase(modelCase)

Create a case

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CaseApi();
var modelCase = new SmallEodClient.ModelCase(); // ModelCase | New case
apiInstance.createCase(modelCase).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelCase** | [**ModelCase**](ModelCase.md)| New case | 

### Return type

[**ModelCase**](ModelCase.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCase

> deleteCase(caseId)



Deletes a single case based on the ID supplied

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CaseApi();
var caseId = 789; // Number | The id of the case to delete
apiInstance.deleteCase(caseId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | **Number**| The id of the case to delete | 

### Return type

null (empty response body)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCase

> [ModelCase] listCase(opts)

List all cases

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CaseApi();
var opts = {
  'limit': 56, // Number | How many items to return at one time (max 100)
  'offset': 56, // Number | How many items skip in return
  'institution': 56 // Number | Institution ID or NULL
};
apiInstance.listCase(opts).then(function(data) {
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
 **institution** | **Number**| Institution ID or NULL | [optional] 

### Return type

[**[ModelCase]**](ModelCase.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showCaseById

> ModelCase showCaseById(caseId)

Info for a specific case

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CaseApi();
var caseId = 3.4; // Number | The id of the case to retrieve
apiInstance.showCaseById(caseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | **Number**| The id of the case to retrieve | 

### Return type

[**ModelCase**](ModelCase.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCaseById

> ModelCase updateCaseById(caseId, modelCase)

Updated case

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.CaseApi();
var caseId = 3.4; // Number | The id of the case to modify
var modelCase = new SmallEodClient.ModelCase(); // ModelCase | Updated case
apiInstance.updateCaseById(caseId, modelCase).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | **Number**| The id of the case to modify | 
 **modelCase** | [**ModelCase**](ModelCase.md)| Updated case | 

### Return type

[**ModelCase**](ModelCase.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

