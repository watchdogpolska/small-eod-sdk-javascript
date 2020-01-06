# SmallEod.NotifiedUserApi

All URIs are relative to *https://small-eod.siecobywatelska.pl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNotifiedUser**](NotifiedUserApi.md#createNotifiedUser) | **POST** /case/{caseId}/notifiedUser | Create a notified user reference of case
[**deleteNotifiedUser**](NotifiedUserApi.md#deleteNotifiedUser) | **DELETE** /case/{caseId}/notifiedUser/{notifiedUserId} | 
[**shownotifiedUserById**](NotifiedUserApi.md#shownotifiedUserById) | **GET** /case/{caseId}/notifiedUser/{notifiedUserId} | Info for a specific notified user of case



## createNotifiedUser

> UserRef createNotifiedUser(caseId, userRef)

Create a notified user reference of case

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.NotifiedUserApi();
var caseId = 3.4; // Number | The id of the case to modify
var userRef = new SmallEod.UserRef(); // UserRef | New notified user
apiInstance.createNotifiedUser(caseId, userRef).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | **Number**| The id of the case to modify | 
 **userRef** | [**UserRef**](UserRef.md)| New notified user | 

### Return type

[**UserRef**](UserRef.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteNotifiedUser

> deleteNotifiedUser(caseId, notifiedUserId)



Deletes a single notified user based on the ID supplied

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.NotifiedUserApi();
var caseId = 789; // Number | The id of the case to modify
var notifiedUserId = 3.4; // Number | The id of the responsible user to delete
apiInstance.deleteNotifiedUser(caseId, notifiedUserId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | **Number**| The id of the case to modify | 
 **notifiedUserId** | **Number**| The id of the responsible user to delete | 

### Return type

null (empty response body)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## shownotifiedUserById

> UserRef shownotifiedUserById(caseId, notifiedUserId)

Info for a specific notified user of case

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.NotifiedUserApi();
var caseId = 3.4; // Number | The id of the case to modify
var notifiedUserId = 3.4; // Number | The id of the responsible user to retrieve
apiInstance.shownotifiedUserById(caseId, notifiedUserId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | **Number**| The id of the case to modify | 
 **notifiedUserId** | **Number**| The id of the responsible user to retrieve | 

### Return type

[**UserRef**](UserRef.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

