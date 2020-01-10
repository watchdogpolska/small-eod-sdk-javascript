# SmallEodClient.CollectionsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collectionsCaseEventList**](CollectionsApi.md#collectionsCaseEventList) | **GET** /collections/{collection_pk}/case/{case_pk}/event/ | 
[**collectionsCaseEventRead**](CollectionsApi.md#collectionsCaseEventRead) | **GET** /collections/{collection_pk}/case/{case_pk}/event/{id}/ | 
[**collectionsCaseLetterList**](CollectionsApi.md#collectionsCaseLetterList) | **GET** /collections/{collection_pk}/case/{case_pk}/letter/ | 
[**collectionsCaseLetterRead**](CollectionsApi.md#collectionsCaseLetterRead) | **GET** /collections/{collection_pk}/case/{case_pk}/letter/{id}/ | 
[**collectionsCaseList**](CollectionsApi.md#collectionsCaseList) | **GET** /collections/{collection_pk}/case/ | 
[**collectionsCaseNoteList**](CollectionsApi.md#collectionsCaseNoteList) | **GET** /collections/{collection_pk}/case/{case_pk}/note/ | 
[**collectionsCaseNoteRead**](CollectionsApi.md#collectionsCaseNoteRead) | **GET** /collections/{collection_pk}/case/{case_pk}/note/{id}/ | 
[**collectionsCaseRead**](CollectionsApi.md#collectionsCaseRead) | **GET** /collections/{collection_pk}/case/{id}/ | 
[**collectionsCreate**](CollectionsApi.md#collectionsCreate) | **POST** /collections/ | 
[**collectionsDelete**](CollectionsApi.md#collectionsDelete) | **DELETE** /collections/{id}/ | 
[**collectionsList**](CollectionsApi.md#collectionsList) | **GET** /collections/ | 
[**collectionsPartialUpdate**](CollectionsApi.md#collectionsPartialUpdate) | **PATCH** /collections/{id}/ | 
[**collectionsRead**](CollectionsApi.md#collectionsRead) | **GET** /collections/{id}/ | 
[**collectionsUpdate**](CollectionsApi.md#collectionsUpdate) | **PUT** /collections/{id}/ | 



## collectionsCaseEventList

> [Event] collectionsCaseEventList(casePk, collectionPk)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var casePk = "casePk_example"; // String | 
var collectionPk = "collectionPk_example"; // String | 
apiInstance.collectionsCaseEventList(casePk, collectionPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **casePk** | **String**|  | 
 **collectionPk** | **String**|  | 

### Return type

[**[Event]**](Event.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCaseEventRead

> Event collectionsCaseEventRead(casePk, collectionPk, id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var casePk = "casePk_example"; // String | 
var collectionPk = "collectionPk_example"; // String | 
var id = "id_example"; // String | 
apiInstance.collectionsCaseEventRead(casePk, collectionPk, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **casePk** | **String**|  | 
 **collectionPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Event**](Event.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCaseLetterList

> [Letter] collectionsCaseLetterList(casePk, collectionPk)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var casePk = "casePk_example"; // String | 
var collectionPk = "collectionPk_example"; // String | 
apiInstance.collectionsCaseLetterList(casePk, collectionPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **casePk** | **String**|  | 
 **collectionPk** | **String**|  | 

### Return type

[**[Letter]**](Letter.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCaseLetterRead

> Letter collectionsCaseLetterRead(casePk, collectionPk, id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var casePk = "casePk_example"; // String | 
var collectionPk = "collectionPk_example"; // String | 
var id = "id_example"; // String | 
apiInstance.collectionsCaseLetterRead(casePk, collectionPk, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **casePk** | **String**|  | 
 **collectionPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Letter**](Letter.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCaseList

> [ModelCase] collectionsCaseList(collectionPk)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var collectionPk = "collectionPk_example"; // String | 
apiInstance.collectionsCaseList(collectionPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionPk** | **String**|  | 

### Return type

[**[ModelCase]**](ModelCase.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCaseNoteList

> [Note] collectionsCaseNoteList(casePk, collectionPk)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var casePk = "casePk_example"; // String | 
var collectionPk = "collectionPk_example"; // String | 
apiInstance.collectionsCaseNoteList(casePk, collectionPk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **casePk** | **String**|  | 
 **collectionPk** | **String**|  | 

### Return type

[**[Note]**](Note.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCaseNoteRead

> Note collectionsCaseNoteRead(casePk, collectionPk, id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var casePk = "casePk_example"; // String | 
var collectionPk = "collectionPk_example"; // String | 
var id = "id_example"; // String | 
apiInstance.collectionsCaseNoteRead(casePk, collectionPk, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **casePk** | **String**|  | 
 **collectionPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Note**](Note.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCaseRead

> ModelCase collectionsCaseRead(collectionPk, id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var collectionPk = "collectionPk_example"; // String | 
var id = "id_example"; // String | 
apiInstance.collectionsCaseRead(collectionPk, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionPk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**ModelCase**](ModelCase.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCreate

> Collection collectionsCreate(data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var data = new SmallEodClient.Collection(); // Collection | 
apiInstance.collectionsCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Collection**](Collection.md)|  | 

### Return type

[**Collection**](Collection.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## collectionsDelete

> collectionsDelete(id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var id = 56; // Number | A unique integer value identifying this collection.
apiInstance.collectionsDelete(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this collection. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## collectionsList

> [Collection] collectionsList()



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
apiInstance.collectionsList().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Collection]**](Collection.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsPartialUpdate

> Collection collectionsPartialUpdate(id, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var id = 56; // Number | A unique integer value identifying this collection.
var data = new SmallEodClient.Collection(); // Collection | 
apiInstance.collectionsPartialUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this collection. | 
 **data** | [**Collection**](Collection.md)|  | 

### Return type

[**Collection**](Collection.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## collectionsRead

> Collection collectionsRead(id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var id = 56; // Number | A unique integer value identifying this collection.
apiInstance.collectionsRead(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this collection. | 

### Return type

[**Collection**](Collection.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsUpdate

> Collection collectionsUpdate(id, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var id = 56; // Number | A unique integer value identifying this collection.
var data = new SmallEodClient.Collection(); // Collection | 
apiInstance.collectionsUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this collection. | 
 **data** | [**Collection**](Collection.md)|  | 

### Return type

[**Collection**](Collection.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

