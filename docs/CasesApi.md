# SmallEodClient.CasesApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**casesCreate**](CasesApi.md#casesCreate) | **POST** /cases/ | 
[**casesDelete**](CasesApi.md#casesDelete) | **DELETE** /cases/{id}/ | 
[**casesList**](CasesApi.md#casesList) | **GET** /cases/ | 
[**casesNotifiedUsersList**](CasesApi.md#casesNotifiedUsersList) | **GET** /cases/{case_pk}/notifiedUsers/ | 
[**casesNotifiedUsersRead**](CasesApi.md#casesNotifiedUsersRead) | **GET** /cases/{case_pk}/notifiedUsers/{id}/ | 
[**casesPartialUpdate**](CasesApi.md#casesPartialUpdate) | **PATCH** /cases/{id}/ | 
[**casesRead**](CasesApi.md#casesRead) | **GET** /cases/{id}/ | 
[**casesResponsibleUsersList**](CasesApi.md#casesResponsibleUsersList) | **GET** /cases/{case_pk}/responsibleUsers/ | 
[**casesResponsibleUsersRead**](CasesApi.md#casesResponsibleUsersRead) | **GET** /cases/{case_pk}/responsibleUsers/{id}/ | 
[**casesUpdate**](CasesApi.md#casesUpdate) | **PUT** /cases/{id}/ | 



## casesCreate

> CaseCount casesCreate(data)



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

let apiInstance = new SmallEodClient.CasesApi();
let data = new SmallEodClient.CaseCount(); // CaseCount | 
apiInstance.casesCreate(data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**CaseCount**](CaseCount.md)|  | 

### Return type

[**CaseCount**](CaseCount.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## casesDelete

> casesDelete(id)



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

let apiInstance = new SmallEodClient.CasesApi();
let id = 56; // Number | A unique integer value identifying this case.
apiInstance.casesDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## casesList

> InlineResponse2001 casesList(opts)



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

let apiInstance = new SmallEodClient.CasesApi();
let opts = {
  'query': "query_example", // String | 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.casesList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## casesNotifiedUsersList

> InlineResponse2002 casesNotifiedUsersList(casePk, opts)



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

let apiInstance = new SmallEodClient.CasesApi();
let casePk = "casePk_example"; // String | 
let opts = {
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.casesNotifiedUsersList(casePk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **casePk** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## casesNotifiedUsersRead

> User casesNotifiedUsersRead(casePk, id)



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

let apiInstance = new SmallEodClient.CasesApi();
let casePk = "casePk_example"; // String | 
let id = "id_example"; // String | 
apiInstance.casesNotifiedUsersRead(casePk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **casePk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## casesPartialUpdate

> CaseCount casesPartialUpdate(id, data)



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

let apiInstance = new SmallEodClient.CasesApi();
let id = 56; // Number | A unique integer value identifying this case.
let data = new SmallEodClient.CaseCount(); // CaseCount | 
apiInstance.casesPartialUpdate(id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case. | 
 **data** | [**CaseCount**](CaseCount.md)|  | 

### Return type

[**CaseCount**](CaseCount.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## casesRead

> CaseCount casesRead(id)



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

let apiInstance = new SmallEodClient.CasesApi();
let id = 56; // Number | A unique integer value identifying this case.
apiInstance.casesRead(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case. | 

### Return type

[**CaseCount**](CaseCount.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## casesResponsibleUsersList

> InlineResponse2002 casesResponsibleUsersList(casePk, opts)



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

let apiInstance = new SmallEodClient.CasesApi();
let casePk = "casePk_example"; // String | 
let opts = {
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.casesResponsibleUsersList(casePk, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **casePk** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## casesResponsibleUsersRead

> User casesResponsibleUsersRead(casePk, id)



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

let apiInstance = new SmallEodClient.CasesApi();
let casePk = "casePk_example"; // String | 
let id = "id_example"; // String | 
apiInstance.casesResponsibleUsersRead(casePk, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **casePk** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## casesUpdate

> CaseCount casesUpdate(id, data)



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

let apiInstance = new SmallEodClient.CasesApi();
let id = 56; // Number | A unique integer value identifying this case.
let data = new SmallEodClient.CaseCount(); // CaseCount | 
apiInstance.casesUpdate(id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this case. | 
 **data** | [**CaseCount**](CaseCount.md)|  | 

### Return type

[**CaseCount**](CaseCount.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

