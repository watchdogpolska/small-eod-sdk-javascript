# SmallEodClient.NotesApi

All URIs are relative to *http://localhost:8000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notesCreate**](NotesApi.md#notesCreate) | **POST** /notes/ | 
[**notesDelete**](NotesApi.md#notesDelete) | **DELETE** /notes/{id}/ | 
[**notesList**](NotesApi.md#notesList) | **GET** /notes/ | 
[**notesPartialUpdate**](NotesApi.md#notesPartialUpdate) | **PATCH** /notes/{id}/ | 
[**notesRead**](NotesApi.md#notesRead) | **GET** /notes/{id}/ | 
[**notesUpdate**](NotesApi.md#notesUpdate) | **PUT** /notes/{id}/ | 



## notesCreate

> Note notesCreate(data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.NotesApi();
var data = new SmallEodClient.Note(); // Note | 
apiInstance.notesCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Note**](Note.md)|  | 

### Return type

[**Note**](Note.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## notesDelete

> notesDelete(id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.NotesApi();
var id = 56; // Number | A unique integer value identifying this note.
apiInstance.notesDelete(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this note. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## notesList

> InlineResponse2007 notesList(opts)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.NotesApi();
var opts = {
  'limit': 56, // Number | Number of results to return per page.
  'offset': 56 // Number | The initial index from which to return the results.
};
apiInstance.notesList(opts).then(function(data) {
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

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## notesPartialUpdate

> Note notesPartialUpdate(id, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.NotesApi();
var id = 56; // Number | A unique integer value identifying this note.
var data = new SmallEodClient.Note(); // Note | 
apiInstance.notesPartialUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this note. | 
 **data** | [**Note**](Note.md)|  | 

### Return type

[**Note**](Note.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## notesRead

> Note notesRead(id)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.NotesApi();
var id = 56; // Number | A unique integer value identifying this note.
apiInstance.notesRead(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this note. | 

### Return type

[**Note**](Note.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## notesUpdate

> Note notesUpdate(id, data)



### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new SmallEodClient.NotesApi();
var id = 56; // Number | A unique integer value identifying this note.
var data = new SmallEodClient.Note(); // Note | 
apiInstance.notesUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this note. | 
 **data** | [**Note**](Note.md)|  | 

### Return type

[**Note**](Note.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

