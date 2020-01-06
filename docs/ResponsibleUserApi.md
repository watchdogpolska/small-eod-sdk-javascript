# SmallEodClient.ResponsibleUserApi

All URIs are relative to *https://small-eod.siecobywatelska.pl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createResponsibleUser**](ResponsibleUserApi.md#createResponsibleUser) | **POST** /case/{caseId}/responsibleUser | Create a responsible user reference of case
[**deleteResponsibleUser**](ResponsibleUserApi.md#deleteResponsibleUser) | **DELETE** /case/{caseId}/responsibleUser/{responsibleUserId} | 
[**showcaseById**](ResponsibleUserApi.md#showcaseById) | **GET** /case/{caseId}/responsibleUser/{responsibleUserId} | Info for a specific responsible user of case



## createResponsibleUser

> UserRef createResponsibleUser(caseId, userRef)

Create a responsible user reference of case

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.ResponsibleUserApi();
var caseId = 3.4; // Number | The id of the case to modify
var userRef = new SmallEodClient.UserRef(); // UserRef | New responsible user
apiInstance.createResponsibleUser(caseId, userRef).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | **Number**| The id of the case to modify | 
 **userRef** | [**UserRef**](UserRef.md)| New responsible user | 

### Return type

[**UserRef**](UserRef.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteResponsibleUser

> deleteResponsibleUser(caseId, responsibleUserId)



Deletes a single responsible user based on the ID supplied

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.ResponsibleUserApi();
var caseId = 3.4; // Number | The id of the case to modify
var responsibleUserId = 3.4; // Number | The id of the responsible user to delete
apiInstance.deleteResponsibleUser(caseId, responsibleUserId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | **Number**| The id of the case to modify | 
 **responsibleUserId** | **Number**| The id of the responsible user to delete | 

### Return type

null (empty response body)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showcaseById

> UserRef showcaseById(caseId, responsibleUserId)

Info for a specific responsible user of case

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.ResponsibleUserApi();
var caseId = 3.4; // Number | The id of the case to retrieve
var responsibleUserId = 3.4; // Number | The id of the responsible user to retrieve
apiInstance.showcaseById(caseId, responsibleUserId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | **Number**| The id of the case to retrieve | 
 **responsibleUserId** | **Number**| The id of the responsible user to retrieve | 

### Return type

[**UserRef**](UserRef.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

