# SmallEodClient.LettersApi

All URIs are relative to *http://localhost:8000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lettersCreate**](LettersApi.md#lettersCreate) | **POST** /letters/ | 
[**lettersDelete**](LettersApi.md#lettersDelete) | **DELETE** /letters/{id}/ | 
[**lettersFilesCreate**](LettersApi.md#lettersFilesCreate) | **POST** /letters/{letter_pk}/files/ | 
[**lettersFilesDelete**](LettersApi.md#lettersFilesDelete) | **DELETE** /letters/{letter_pk}/files/{id}/ | 
[**lettersFilesList**](LettersApi.md#lettersFilesList) | **GET** /letters/{letter_pk}/files/ | 
[**lettersFilesPartialUpdate**](LettersApi.md#lettersFilesPartialUpdate) | **PATCH** /letters/{letter_pk}/files/{id}/ | 
[**lettersFilesRead**](LettersApi.md#lettersFilesRead) | **GET** /letters/{letter_pk}/files/{id}/ | 
[**lettersFilesSignCreate**](LettersApi.md#lettersFilesSignCreate) | **POST** /letters/files/sign | 
[**lettersFilesUpdate**](LettersApi.md#lettersFilesUpdate) | **PUT** /letters/{letter_pk}/files/{id}/ | 
[**lettersList**](LettersApi.md#lettersList) | **GET** /letters/ | 
[**lettersPartialUpdate**](LettersApi.md#lettersPartialUpdate) | **PATCH** /letters/{id}/ | 
[**lettersRead**](LettersApi.md#lettersRead) | **GET** /letters/{id}/ | 
[**lettersUpdate**](LettersApi.md#lettersUpdate) | **PUT** /letters/{id}/ | 



## lettersCreate

> Letter lettersCreate(data)



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

var apiInstance = new SmallEodClient.LettersApi();
var data = new SmallEodClient.Letter(); // Letter | 
apiInstance.lettersCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Letter**](Letter.md)|  | 

### Return type

[**Letter**](Letter.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## lettersDelete

> lettersDelete(id)



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

var apiInstance = new SmallEodClient.LettersApi();
var id = 56; // Number | A unique integer value identifying this letter.
apiInstance.lettersDelete(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this letter. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## lettersFilesCreate

> File lettersFilesCreate(letterPk, data)



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

var apiInstance = new SmallEodClient.LettersApi();
var letterPk = "letterPk_example"; // String | 
var data = null; // File | 
apiInstance.lettersFilesCreate(letterPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **letterPk** | **String**|  | 
 **data** | [**File**](File.md)|  | 

### Return type

**File**

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## lettersFilesDelete

> lettersFilesDelete(id, letterPk)



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

var apiInstance = new SmallEodClient.LettersApi();
var id = "id_example"; // String | 
var letterPk = "letterPk_example"; // String | 
apiInstance.lettersFilesDelete(id, letterPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **letterPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## lettersFilesList

> InlineResponse20013 lettersFilesList(letterPk, opts)



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

var apiInstance = new SmallEodClient.LettersApi();
var letterPk = "letterPk_example"; // String | 
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.lettersFilesList(letterPk, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **letterPk** | **String**|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## lettersFilesPartialUpdate

> File lettersFilesPartialUpdate(id, letterPk, data)



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

var apiInstance = new SmallEodClient.LettersApi();
var id = "id_example"; // String | 
var letterPk = "letterPk_example"; // String | 
var data = null; // File | 
apiInstance.lettersFilesPartialUpdate(id, letterPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **letterPk** | **String**|  | 
 **data** | [**File**](File.md)|  | 

### Return type

**File**

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## lettersFilesRead

> File lettersFilesRead(id, letterPk)



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

var apiInstance = new SmallEodClient.LettersApi();
var id = "id_example"; // String | 
var letterPk = "letterPk_example"; // String | 
apiInstance.lettersFilesRead(id, letterPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **letterPk** | **String**|  | 

### Return type

**File**

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## lettersFilesSignCreate

> SignRequest lettersFilesSignCreate(data)



Generates pre-signed form data for uploading files to object storage.

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

var apiInstance = new SmallEodClient.LettersApi();
var data = new SmallEodClient.SignRequest(); // SignRequest | 
apiInstance.lettersFilesSignCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**SignRequest**](SignRequest.md)|  | 

### Return type

[**SignRequest**](SignRequest.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## lettersFilesUpdate

> File lettersFilesUpdate(id, letterPk, data)



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

var apiInstance = new SmallEodClient.LettersApi();
var id = "id_example"; // String | 
var letterPk = "letterPk_example"; // String | 
var data = null; // File | 
apiInstance.lettersFilesUpdate(id, letterPk, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **letterPk** | **String**|  | 
 **data** | [**File**](File.md)|  | 

### Return type

**File**

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## lettersList

> InlineResponse2007 lettersList(opts)



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

var apiInstance = new SmallEodClient.LettersApi();
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.lettersList(opts).then(function(data) {
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

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## lettersPartialUpdate

> Letter lettersPartialUpdate(id, data)



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

var apiInstance = new SmallEodClient.LettersApi();
var id = 56; // Number | A unique integer value identifying this letter.
var data = new SmallEodClient.Letter(); // Letter | 
apiInstance.lettersPartialUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this letter. | 
 **data** | [**Letter**](Letter.md)|  | 

### Return type

[**Letter**](Letter.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## lettersRead

> Letter lettersRead(id)



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

var apiInstance = new SmallEodClient.LettersApi();
var id = 56; // Number | A unique integer value identifying this letter.
apiInstance.lettersRead(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this letter. | 

### Return type

[**Letter**](Letter.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## lettersUpdate

> Letter lettersUpdate(id, data)



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

var apiInstance = new SmallEodClient.LettersApi();
var id = 56; // Number | A unique integer value identifying this letter.
var data = new SmallEodClient.Letter(); // Letter | 
apiInstance.lettersUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this letter. | 
 **data** | [**Letter**](Letter.md)|  | 

### Return type

[**Letter**](Letter.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

