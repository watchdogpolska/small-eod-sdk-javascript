# SmallEodClient.CollectionsApi

All URIs are relative to *http://localhost/api*

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

> InlineResponse2006 collectionsCasesEventsList(casePk, collectionPk, opts)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure API key authorization: CollectionToken
let CollectionToken = defaultClient.authentications['CollectionToken'];
CollectionToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CollectionToken.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let casePk = "casePk_example"; // String | 
let collectionPk = "collectionPk_example"; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.collectionsCasesEventsList(casePk, collectionPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer), [CollectionToken](../README.md#CollectionToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCasesEventsRead

> Event collectionsCasesEventsRead(casePk, collectionPk, id)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure API key authorization: CollectionToken
let CollectionToken = defaultClient.authentications['CollectionToken'];
CollectionToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CollectionToken.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let casePk = "casePk_example"; // String | 
let collectionPk = "collectionPk_example"; // String | 
let id = "id_example"; // String | 
apiInstance.collectionsCasesEventsRead(casePk, collectionPk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer), [CollectionToken](../README.md#CollectionToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCasesLettersList

> InlineResponse2007 collectionsCasesLettersList(casePk, collectionPk, opts)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure API key authorization: CollectionToken
let CollectionToken = defaultClient.authentications['CollectionToken'];
CollectionToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CollectionToken.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let casePk = "casePk_example"; // String | 
let collectionPk = "collectionPk_example"; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.collectionsCasesLettersList(casePk, collectionPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer), [CollectionToken](../README.md#CollectionToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCasesLettersRead

> Letter collectionsCasesLettersRead(casePk, collectionPk, id)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure API key authorization: CollectionToken
let CollectionToken = defaultClient.authentications['CollectionToken'];
CollectionToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CollectionToken.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let casePk = "casePk_example"; // String | 
let collectionPk = "collectionPk_example"; // String | 
let id = "id_example"; // String | 
apiInstance.collectionsCasesLettersRead(casePk, collectionPk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer), [CollectionToken](../README.md#CollectionToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCasesList

> InlineResponse2005 collectionsCasesList(collectionPk, opts)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure API key authorization: CollectionToken
let CollectionToken = defaultClient.authentications['CollectionToken'];
CollectionToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CollectionToken.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let collectionPk = "collectionPk_example"; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.collectionsCasesList(collectionPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer), [CollectionToken](../README.md#CollectionToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCasesNotesList

> InlineResponse2008 collectionsCasesNotesList(casePk, collectionPk, opts)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure API key authorization: CollectionToken
let CollectionToken = defaultClient.authentications['CollectionToken'];
CollectionToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CollectionToken.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let casePk = "casePk_example"; // String | 
let collectionPk = "collectionPk_example"; // String | 
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.collectionsCasesNotesList(casePk, collectionPk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer), [CollectionToken](../README.md#CollectionToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCasesNotesRead

> Note collectionsCasesNotesRead(casePk, collectionPk, id)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure API key authorization: CollectionToken
let CollectionToken = defaultClient.authentications['CollectionToken'];
CollectionToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CollectionToken.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let casePk = "casePk_example"; // String | 
let collectionPk = "collectionPk_example"; // String | 
let id = "id_example"; // String | 
apiInstance.collectionsCasesNotesRead(casePk, collectionPk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer), [CollectionToken](../README.md#CollectionToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCasesRead

> ModelCase collectionsCasesRead(collectionPk, id)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure API key authorization: CollectionToken
let CollectionToken = defaultClient.authentications['CollectionToken'];
CollectionToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CollectionToken.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let collectionPk = "collectionPk_example"; // String | 
let id = "id_example"; // String | 
apiInstance.collectionsCasesRead(collectionPk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer), [CollectionToken](../README.md#CollectionToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsCreate

> Collection collectionsCreate(data)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let data = new SmallEodClient.Collection(); // Collection | 
apiInstance.collectionsCreate(data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## collectionsDelete

> collectionsDelete(id)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let id = 56; // Number | A unique integer value identifying this collection.
apiInstance.collectionsDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## collectionsList

> InlineResponse2004 collectionsList(opts)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let opts = {
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.collectionsList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsPartialUpdate

> Collection collectionsPartialUpdate(id, data)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let id = 56; // Number | A unique integer value identifying this collection.
let data = new SmallEodClient.Collection(); // Collection | 
apiInstance.collectionsPartialUpdate(id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## collectionsRead

> Collection collectionsRead(id)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';
// Configure API key authorization: CollectionToken
let CollectionToken = defaultClient.authentications['CollectionToken'];
CollectionToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//CollectionToken.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let id = 56; // Number | A unique integer value identifying this collection.
apiInstance.collectionsRead(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer), [CollectionToken](../README.md#CollectionToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## collectionsTokensCreate

> TokenSet collectionsTokensCreate(collectionPk, data)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let collectionPk = "collectionPk_example"; // String | 
let data = new SmallEodClient.TokenSet(); // TokenSet | 
apiInstance.collectionsTokensCreate(collectionPk, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionPk** | **String**|  | 
 **data** | [**TokenSet**](TokenSet.md)|  | 

### Return type

[**TokenSet**](TokenSet.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## collectionsUpdate

> Collection collectionsUpdate(id, data)



### Example

```javascript
import SmallEodClient from 'small_eod_client';
let defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SmallEodClient.CollectionsApi();
let id = 56; // Number | A unique integer value identifying this collection.
let data = new SmallEodClient.Collection(); // Collection | 
apiInstance.collectionsUpdate(id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

