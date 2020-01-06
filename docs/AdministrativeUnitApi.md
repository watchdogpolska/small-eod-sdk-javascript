# SmallEod.AdministrativeUnitApi

All URIs are relative to *https://small-eod.siecobywatelska.pl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAdministrativeUnit**](AdministrativeUnitApi.md#createAdministrativeUnit) | **POST** /administrativeUnit | Create a administrative unit
[**deleteAdministrativeUnit**](AdministrativeUnitApi.md#deleteAdministrativeUnit) | **DELETE** /administrativeUnit/{administrativeUnitId} | 
[**listAdministrativeUnit**](AdministrativeUnitApi.md#listAdministrativeUnit) | **GET** /administrativeUnit | List all administrative units
[**showAdministrativeUnitById**](AdministrativeUnitApi.md#showAdministrativeUnitById) | **GET** /administrativeUnit/{administrativeUnitId} | Info for a specific administrative unit



## createAdministrativeUnit

> AdministrativeUnit createAdministrativeUnit(administrativeUnit)

Create a administrative unit

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.AdministrativeUnitApi();
var administrativeUnit = new SmallEod.AdministrativeUnit(); // AdministrativeUnit | New administrative unit
apiInstance.createAdministrativeUnit(administrativeUnit).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **administrativeUnit** | [**AdministrativeUnit**](AdministrativeUnit.md)| New administrative unit | 

### Return type

[**AdministrativeUnit**](AdministrativeUnit.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAdministrativeUnit

> deleteAdministrativeUnit(administrativeUnitId)



Deletes a single administrative unit based on the ID supplied

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.AdministrativeUnitApi();
var administrativeUnitId = 789; // Number | The id of the administrativeUnit to delete
apiInstance.deleteAdministrativeUnit(administrativeUnitId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **administrativeUnitId** | **Number**| The id of the administrativeUnit to delete | 

### Return type

null (empty response body)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAdministrativeUnit

> [AdministrativeUnit] listAdministrativeUnit(opts)

List all administrative units

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.AdministrativeUnitApi();
var opts = {
  'limit': 56, // Number | How many items to return at one time (max 100)
  'offset': 56 // Number | How many items skip in return
};
apiInstance.listAdministrativeUnit(opts).then(function(data) {
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

[**[AdministrativeUnit]**](AdministrativeUnit.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showAdministrativeUnitById

> AdministrativeUnit showAdministrativeUnitById(administrativeUnitId)

Info for a specific administrative unit

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.AdministrativeUnitApi();
var administrativeUnitId = 3.4; // Number | The id of the administrative unit to retrieve
apiInstance.showAdministrativeUnitById(administrativeUnitId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **administrativeUnitId** | **Number**| The id of the administrative unit to retrieve | 

### Return type

[**AdministrativeUnit**](AdministrativeUnit.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

