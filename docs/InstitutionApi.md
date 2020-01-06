# SmallEod.InstitutionApi

All URIs are relative to *https://small-eod.siecobywatelska.pl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInstitution**](InstitutionApi.md#createInstitution) | **POST** /institution | Create a institution
[**listInstitution**](InstitutionApi.md#listInstitution) | **GET** /institution | List all institutions



## createInstitution

> Institution createInstitution(institution)

Create a institution

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.InstitutionApi();
var institution = new SmallEod.Institution(); // Institution | New institution
apiInstance.createInstitution(institution).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institution** | [**Institution**](Institution.md)| New institution | 

### Return type

[**Institution**](Institution.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listInstitution

> [Institution] listInstitution(opts)

List all institutions

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.InstitutionApi();
var opts = {
  'limit': 56, // Number | How many items to return at one time (max 100)
  'offset': 56 // Number | How many items skip in return
};
apiInstance.listInstitution(opts).then(function(data) {
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

[**[Institution]**](Institution.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

