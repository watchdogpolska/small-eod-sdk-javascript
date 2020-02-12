# SmallEodClient.DictionariesApi

All URIs are relative to *http://web*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dictionariesCreate**](DictionariesApi.md#dictionariesCreate) | **POST** /dictionaries/ | 
[**dictionariesDelete**](DictionariesApi.md#dictionariesDelete) | **DELETE** /dictionaries/{id}/ | 
[**dictionariesList**](DictionariesApi.md#dictionariesList) | **GET** /dictionaries/ | 
[**dictionariesPartialUpdate**](DictionariesApi.md#dictionariesPartialUpdate) | **PATCH** /dictionaries/{id}/ | 
[**dictionariesRead**](DictionariesApi.md#dictionariesRead) | **GET** /dictionaries/{id}/ | 
[**dictionariesUpdate**](DictionariesApi.md#dictionariesUpdate) | **PUT** /dictionaries/{id}/ | 



## dictionariesCreate

> Dictionary dictionariesCreate(data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.DictionariesApi();
var data = new SmallEodClient.Dictionary(); // Dictionary | 
apiInstance.dictionariesCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Dictionary**](Dictionary.md)|  | 

### Return type

[**Dictionary**](Dictionary.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dictionariesDelete

> dictionariesDelete(id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.DictionariesApi();
var id = 56; // Number | A unique integer value identifying this dictionary.
apiInstance.dictionariesDelete(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this dictionary. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## dictionariesList

> InlineResponse2009 dictionariesList(opts)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.DictionariesApi();
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.dictionariesList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dictionariesPartialUpdate

> Dictionary dictionariesPartialUpdate(id, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.DictionariesApi();
var id = 56; // Number | A unique integer value identifying this dictionary.
var data = new SmallEodClient.Dictionary(); // Dictionary | 
apiInstance.dictionariesPartialUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this dictionary. | 
 **data** | [**Dictionary**](Dictionary.md)|  | 

### Return type

[**Dictionary**](Dictionary.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dictionariesRead

> Dictionary dictionariesRead(id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.DictionariesApi();
var id = 56; // Number | A unique integer value identifying this dictionary.
apiInstance.dictionariesRead(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this dictionary. | 

### Return type

[**Dictionary**](Dictionary.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dictionariesUpdate

> Dictionary dictionariesUpdate(id, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.DictionariesApi();
var id = 56; // Number | A unique integer value identifying this dictionary.
var data = new SmallEodClient.Dictionary(); // Dictionary | 
apiInstance.dictionariesUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this dictionary. | 
 **data** | [**Dictionary**](Dictionary.md)|  | 

### Return type

[**Dictionary**](Dictionary.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
