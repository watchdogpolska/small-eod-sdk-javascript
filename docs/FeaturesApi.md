# SmallEodClient.FeaturesApi

All URIs are relative to *http://localhost:8000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**featuresCreate**](FeaturesApi.md#featuresCreate) | **POST** /features/ | 
[**featuresDelete**](FeaturesApi.md#featuresDelete) | **DELETE** /features/{id}/ | 
[**featuresFeatureoptionCreate**](FeaturesApi.md#featuresFeatureoptionCreate) | **POST** /features/{feature_pk}/featureoption/ | 
[**featuresFeatureoptionDelete**](FeaturesApi.md#featuresFeatureoptionDelete) | **DELETE** /features/{feature_pk}/featureoption/{id}/ | 
[**featuresFeatureoptionList**](FeaturesApi.md#featuresFeatureoptionList) | **GET** /features/{feature_pk}/featureoption/ | 
[**featuresFeatureoptionPartialUpdate**](FeaturesApi.md#featuresFeatureoptionPartialUpdate) | **PATCH** /features/{feature_pk}/featureoption/{id}/ | 
[**featuresFeatureoptionRead**](FeaturesApi.md#featuresFeatureoptionRead) | **GET** /features/{feature_pk}/featureoption/{id}/ | 
[**featuresFeatureoptionUpdate**](FeaturesApi.md#featuresFeatureoptionUpdate) | **PUT** /features/{feature_pk}/featureoption/{id}/ | 
[**featuresList**](FeaturesApi.md#featuresList) | **GET** /features/ | 
[**featuresPartialUpdate**](FeaturesApi.md#featuresPartialUpdate) | **PATCH** /features/{id}/ | 
[**featuresRead**](FeaturesApi.md#featuresRead) | **GET** /features/{id}/ | 
[**featuresUpdate**](FeaturesApi.md#featuresUpdate) | **PUT** /features/{id}/ | 



## featuresCreate

> Feature featuresCreate(data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FeaturesApi();
var data = new SmallEodClient.Feature(); // Feature | 
apiInstance.featuresCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Feature**](Feature.md)|  | 

### Return type

[**Feature**](Feature.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## featuresDelete

> featuresDelete(id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FeaturesApi();
var id = 56; // Number | A unique integer value identifying this feature.
apiInstance.featuresDelete(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this feature. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## featuresFeatureoptionCreate

> FeatureOption featuresFeatureoptionCreate(featurePk, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FeaturesApi();
var featurePk = "featurePk_example"; // String | 
var data = new SmallEodClient.FeatureOption(); // FeatureOption | 
apiInstance.featuresFeatureoptionCreate(featurePk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featurePk** | **String**|  | 
 **data** | [**FeatureOption**](FeatureOption.md)|  | 

### Return type

[**FeatureOption**](FeatureOption.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## featuresFeatureoptionDelete

> featuresFeatureoptionDelete(featurePk, id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FeaturesApi();
var featurePk = "featurePk_example"; // String | 
var id = "id_example"; // String | 
apiInstance.featuresFeatureoptionDelete(featurePk, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featurePk** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## featuresFeatureoptionList

> InlineResponse20011 featuresFeatureoptionList(featurePk, opts)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FeaturesApi();
var featurePk = "featurePk_example"; // String | 
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.featuresFeatureoptionList(featurePk, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featurePk** | **String**|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## featuresFeatureoptionPartialUpdate

> FeatureOption featuresFeatureoptionPartialUpdate(featurePk, id, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FeaturesApi();
var featurePk = "featurePk_example"; // String | 
var id = "id_example"; // String | 
var data = new SmallEodClient.FeatureOption(); // FeatureOption | 
apiInstance.featuresFeatureoptionPartialUpdate(featurePk, id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featurePk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**FeatureOption**](FeatureOption.md)|  | 

### Return type

[**FeatureOption**](FeatureOption.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## featuresFeatureoptionRead

> FeatureOption featuresFeatureoptionRead(featurePk, id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FeaturesApi();
var featurePk = "featurePk_example"; // String | 
var id = "id_example"; // String | 
apiInstance.featuresFeatureoptionRead(featurePk, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featurePk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**FeatureOption**](FeatureOption.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## featuresFeatureoptionUpdate

> FeatureOption featuresFeatureoptionUpdate(featurePk, id, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FeaturesApi();
var featurePk = "featurePk_example"; // String | 
var id = "id_example"; // String | 
var data = new SmallEodClient.FeatureOption(); // FeatureOption | 
apiInstance.featuresFeatureoptionUpdate(featurePk, id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featurePk** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**FeatureOption**](FeatureOption.md)|  | 

### Return type

[**FeatureOption**](FeatureOption.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## featuresList

> InlineResponse20010 featuresList(opts)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FeaturesApi();
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.featuresList(opts).then(function(data) {
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

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## featuresPartialUpdate

> Feature featuresPartialUpdate(id, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FeaturesApi();
var id = 56; // Number | A unique integer value identifying this feature.
var data = new SmallEodClient.Feature(); // Feature | 
apiInstance.featuresPartialUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this feature. | 
 **data** | [**Feature**](Feature.md)|  | 

### Return type

[**Feature**](Feature.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## featuresRead

> Feature featuresRead(id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FeaturesApi();
var id = 56; // Number | A unique integer value identifying this feature.
apiInstance.featuresRead(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this feature. | 

### Return type

[**Feature**](Feature.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## featuresUpdate

> Feature featuresUpdate(id, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FeaturesApi();
var id = 56; // Number | A unique integer value identifying this feature.
var data = new SmallEodClient.Feature(); // Feature | 
apiInstance.featuresUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this feature. | 
 **data** | [**Feature**](Feature.md)|  | 

### Return type

[**Feature**](Feature.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

