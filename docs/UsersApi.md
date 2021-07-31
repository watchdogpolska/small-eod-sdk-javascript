# SmallEodClient.UsersApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersAuth**](UsersApi.md#usersAuth) | **GET** /users/auth/ | 
[**usersCreate**](UsersApi.md#usersCreate) | **POST** /users/ | 
[**usersDelete**](UsersApi.md#usersDelete) | **DELETE** /users/{id}/ | 
[**usersExchange**](UsersApi.md#usersExchange) | **GET** /users/exchange/ | 
[**usersList**](UsersApi.md#usersList) | **GET** /users/ | 
[**usersPartialUpdate**](UsersApi.md#usersPartialUpdate) | **PATCH** /users/{id}/ | 
[**usersRead**](UsersApi.md#usersRead) | **GET** /users/{id}/ | 
[**usersRefresh**](UsersApi.md#usersRefresh) | **POST** /users/refresh/ | 
[**usersUpdate**](UsersApi.md#usersUpdate) | **PUT** /users/{id}/ | 



## usersAuth

> Request usersAuth(opts)



API endpoint to receive URI for OAuth authorization url

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

let apiInstance = new SmallEodClient.UsersApi();
let opts = {
  'query': "query_example", // String | 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.usersAuth(opts).then((data) => {
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

[**Request**](Request.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersCreate

> User usersCreate(data)



API endpoint that allows users to be viewed or edited.

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

let apiInstance = new SmallEodClient.UsersApi();
let data = new SmallEodClient.User(); // User | 
apiInstance.usersCreate(data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersDelete

> usersDelete(id)



API endpoint that allows users to be viewed or edited.

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

let apiInstance = new SmallEodClient.UsersApi();
let id = 56; // Number | A unique integer value identifying this user.
apiInstance.usersDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this user. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## usersExchange

> TokenResponse usersExchange(opts)



API endpoint to exchange authorization code to access token

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

let apiInstance = new SmallEodClient.UsersApi();
let opts = {
  'query': "query_example", // String | 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56, // Number | The initial index from which to return the results.
  'authuser': "authuser_example", // String | 
  'code': "code_example", // String | 
  'prompt': "prompt_example", // String | 
  'scope': "scope_example", // String | scope of OAuth consents
  'state': "state_example" // String | 
};
apiInstance.usersExchange(opts).then((data) => {
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
 **authuser** | **String**|  | [optional] 
 **code** | **String**|  | [optional] 
 **prompt** | **String**|  | [optional] 
 **scope** | **String**| scope of OAuth consents | [optional] 
 **state** | **String**|  | [optional] 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersList

> InlineResponse20013 usersList(opts)



API endpoint that allows users to be viewed or edited.

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

let apiInstance = new SmallEodClient.UsersApi();
let opts = {
  'query': "query_example", // String | 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.usersList(opts).then((data) => {
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

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersPartialUpdate

> User usersPartialUpdate(id, data)



API endpoint that allows users to be viewed or edited.

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

let apiInstance = new SmallEodClient.UsersApi();
let id = 56; // Number | A unique integer value identifying this user.
let data = new SmallEodClient.User(); // User | 
apiInstance.usersPartialUpdate(id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this user. | 
 **data** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersRead

> User usersRead(id)



API endpoint that allows users to be viewed or edited.

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

let apiInstance = new SmallEodClient.UsersApi();
let id = 56; // Number | A unique integer value identifying this user.
apiInstance.usersRead(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this user. | 

### Return type

[**User**](User.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersRefresh

> TokenResponse usersRefresh(data)



API endpoint to exchange refresh token to fresh access token

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

let apiInstance = new SmallEodClient.UsersApi();
let data = new SmallEodClient.RefreshTokenRequest(); // RefreshTokenRequest | 
apiInstance.usersRefresh(data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**RefreshTokenRequest**](RefreshTokenRequest.md)|  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersUpdate

> User usersUpdate(id, data)



API endpoint that allows users to be viewed or edited.

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

let apiInstance = new SmallEodClient.UsersApi();
let id = 56; // Number | A unique integer value identifying this user.
let data = new SmallEodClient.User(); // User | 
apiInstance.usersUpdate(id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this user. | 
 **data** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

