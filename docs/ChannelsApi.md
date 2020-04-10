# SmallEodClient.ChannelsApi

All URIs are relative to *http://localhost:8000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**channelsCreate**](ChannelsApi.md#channelsCreate) | **POST** /channels/ | 
[**channelsDelete**](ChannelsApi.md#channelsDelete) | **DELETE** /channels/{id}/ | 
[**channelsList**](ChannelsApi.md#channelsList) | **GET** /channels/ | 
[**channelsPartialUpdate**](ChannelsApi.md#channelsPartialUpdate) | **PATCH** /channels/{id}/ | 
[**channelsRead**](ChannelsApi.md#channelsRead) | **GET** /channels/{id}/ | 
[**channelsUpdate**](ChannelsApi.md#channelsUpdate) | **PUT** /channels/{id}/ | 



## channelsCreate

> Channel channelsCreate(data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.ChannelsApi();
var data = new SmallEodClient.Channel(); // Channel | 
apiInstance.channelsCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Channel**](Channel.md)|  | 

### Return type

[**Channel**](Channel.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## channelsDelete

> channelsDelete(id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.ChannelsApi();
var id = 56; // Number | A unique integer value identifying this channel.
apiInstance.channelsDelete(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this channel. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## channelsList

> InlineResponse2002 channelsList(opts)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.ChannelsApi();
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.channelsList(opts).then(function(data) {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## channelsPartialUpdate

> Channel channelsPartialUpdate(id, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.ChannelsApi();
var id = 56; // Number | A unique integer value identifying this channel.
var data = new SmallEodClient.Channel(); // Channel | 
apiInstance.channelsPartialUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this channel. | 
 **data** | [**Channel**](Channel.md)|  | 

### Return type

[**Channel**](Channel.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## channelsRead

> Channel channelsRead(id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.ChannelsApi();
var id = 56; // Number | A unique integer value identifying this channel.
apiInstance.channelsRead(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this channel. | 

### Return type

[**Channel**](Channel.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## channelsUpdate

> Channel channelsUpdate(id, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.ChannelsApi();
var id = 56; // Number | A unique integer value identifying this channel.
var data = new SmallEodClient.Channel(); // Channel | 
apiInstance.channelsUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this channel. | 
 **data** | [**Channel**](Channel.md)|  | 

### Return type

[**Channel**](Channel.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

