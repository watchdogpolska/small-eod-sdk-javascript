# SmallEodClient.CollectionsApi

All URIs are relative to *http://backend/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collectionsCasesEventsList**](CollectionsApi.md#collectionsCasesEventsList) | **GET** /collections/{collection_pk}/cases/{case_pk}/events/ | 
[**collectionsCasesEventsRead**](CollectionsApi.md#collectionsCasesEventsRead) | **GET** /collections/{collection_pk}/cases/{case_pk}/events/{id}/ | 
[**collectionsCasesLettersList**](CollectionsApi.md#collectionsCasesLettersList) | **GET** /collections/{collection_pk}/cases/{case_pk}/letters/ | 
[**collectionsCasesLettersRead**](CollectionsApi.md#collectionsCasesLettersRead) | **GET** /collections/{collection_pk}/cases/{case_pk}/letters/{id}/ | 
[**collectionsCasesList**](CollectionsApi.md#collectionsCasesList) | **GET** /collections/{collection_pk}/cases/ | 
[**collectionsCasesNotesList**](CollectionsApi.md#collectionsCasesNotesList) | **GET** /collections/{collection_pk}/cases/{case_pk}/notes/ | 
[**collectionsCasesNotesRead**](CollectionsApi.md#collectionsCasesNotesRead) | **GET** /collections/{collection_pk}/cases/{case_pk}/notes/{id}/ | 
[**collectionsCasesRead**](CollectionsApi.md#collectionsCasesRead) | **GET** /collections/{collection_pk}/cases/{id}/ | 
[**collectionsCreate**](CollectionsApi.md#collectionsCreate) | **POST** /collections/ | 
[**collectionsDelete**](CollectionsApi.md#collectionsDelete) | **DELETE** /collections/{id}/ | 
[**collectionsList**](CollectionsApi.md#collectionsList) | **GET** /collections/ | 
[**collectionsPartialUpdate**](CollectionsApi.md#collectionsPartialUpdate) | **PATCH** /collections/{id}/ | 
[**collectionsRead**](CollectionsApi.md#collectionsRead) | **GET** /collections/{id}/ | 
[**collectionsTokensCreate**](CollectionsApi.md#collectionsTokensCreate) | **POST** /collections/{collection_pk}/tokens/ | 
[**collectionsUpdate**](CollectionsApi.md#collectionsUpdate) | **PUT** /collections/{id}/ | 



## collectionsCasesEventsList

> InlineResponse2005 collectionsCasesEventsList(casePk, collectionPk, opts)



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
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.collectionsCasesEventsList(casePk, collectionPk, opts).then(function(data) {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCasesEventsRead

> Event collectionsCasesEventsRead(casePk, collectionPk, id)



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
apiInstance.collectionsCasesEventsRead(casePk, collectionPk, id).then(function(data) {
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


## collectionsCasesLettersList

> InlineResponse2006 collectionsCasesLettersList(casePk, collectionPk, opts)



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
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.collectionsCasesLettersList(casePk, collectionPk, opts).then(function(data) {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCasesLettersRead

> Letter collectionsCasesLettersRead(casePk, collectionPk, id)



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
apiInstance.collectionsCasesLettersRead(casePk, collectionPk, id).then(function(data) {
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


## collectionsCasesList

> InlineResponse2004 collectionsCasesList(collectionPk, opts)



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
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.collectionsCasesList(collectionPk, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionPk** | **String**|  | 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCasesNotesList

> InlineResponse2007 collectionsCasesNotesList(casePk, collectionPk, opts)



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
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.collectionsCasesNotesList(casePk, collectionPk, opts).then(function(data) {
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
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCasesNotesRead

> Note collectionsCasesNotesRead(casePk, collectionPk, id)



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
apiInstance.collectionsCasesNotesRead(casePk, collectionPk, id).then(function(data) {
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


## collectionsCasesRead

> ModelCase collectionsCasesRead(collectionPk, id)



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
apiInstance.collectionsCasesRead(collectionPk, id).then(function(data) {
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

> InlineResponse2003 collectionsList(opts)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.CollectionsApi();
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.collectionsList(opts).then(function(data) {
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

[**InlineResponse2003**](InlineResponse2003.md)

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


## collectionsTokensCreate

> collectionsTokensCreate(collectionPk)



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
apiInstance.collectionsTokensCreate(collectionPk).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionPk** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


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

