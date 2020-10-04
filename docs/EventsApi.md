# SmallEodClient.EventsApi

All URIs are relative to *http://localhost:8000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsCreate**](EventsApi.md#eventsCreate) | **POST** /events/ | 
[**eventsDelete**](EventsApi.md#eventsDelete) | **DELETE** /events/{id}/ | 
[**eventsList**](EventsApi.md#eventsList) | **GET** /events/ | 
[**eventsPartialUpdate**](EventsApi.md#eventsPartialUpdate) | **PATCH** /events/{id}/ | 
[**eventsRead**](EventsApi.md#eventsRead) | **GET** /events/{id}/ | 
[**eventsUpdate**](EventsApi.md#eventsUpdate) | **PUT** /events/{id}/ | 



## eventsCreate

> Event eventsCreate(data)



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

let apiInstance = new SmallEodClient.EventsApi();
let data = new SmallEodClient.Event(); // Event | 
apiInstance.eventsCreate(data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Event**](Event.md)|  | 

### Return type

[**Event**](Event.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventsDelete

> eventsDelete(id)



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

let apiInstance = new SmallEodClient.EventsApi();
let id = 56; // Number | A unique integer value identifying this event.
apiInstance.eventsDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this event. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## eventsList

> InlineResponse2006 eventsList(opts)



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

let apiInstance = new SmallEodClient.EventsApi();
let opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.eventsList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of results to return per page. | [optional] 
 **offset** | **Number**| The initial index from which to return the results. | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventsPartialUpdate

> Event eventsPartialUpdate(id, data)



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

let apiInstance = new SmallEodClient.EventsApi();
let id = 56; // Number | A unique integer value identifying this event.
let data = new SmallEodClient.Event(); // Event | 
apiInstance.eventsPartialUpdate(id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this event. | 
 **data** | [**Event**](Event.md)|  | 

### Return type

[**Event**](Event.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventsRead

> Event eventsRead(id)



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

let apiInstance = new SmallEodClient.EventsApi();
let id = 56; // Number | A unique integer value identifying this event.
apiInstance.eventsRead(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this event. | 

### Return type

[**Event**](Event.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eventsUpdate

> Event eventsUpdate(id, data)



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

let apiInstance = new SmallEodClient.EventsApi();
let id = 56; // Number | A unique integer value identifying this event.
let data = new SmallEodClient.Event(); // Event | 
apiInstance.eventsUpdate(id, data).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this event. | 
 **data** | [**Event**](Event.md)|  | 

### Return type

[**Event**](Event.md)

### Authorization

[Basic](../README.md#Basic), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

