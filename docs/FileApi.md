# SmallEodClient.FileApi

All URIs are relative to *https://small-eod.siecobywatelska.pl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFile**](FileApi.md#createFile) | **POST** /letter/{letterId}/file | Create a file
[**createPreSignedUrl**](FileApi.md#createPreSignedUrl) | **POST** /letter/file/sign | Create a pre-signed URLs for file
[**showFileByLetterId**](FileApi.md#showFileByLetterId) | **GET** /letter/{letterId}/file/{fileId} | Info for a specific file



## createFile

> File createFile(letterId, file)

Create a file

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FileApi();
var letterId = 3.4; // Number | The id of the letter to retrieve
var file = null; // File | New file
apiInstance.createFile(letterId, file).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **letterId** | **Number**| The id of the letter to retrieve | 
 **file** | [**File**](File.md)| New file | 

### Return type

**File**

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPreSignedUrl

> FileSigner createPreSignedUrl(fileSigner)

Create a pre-signed URLs for file

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FileApi();
var fileSigner = new SmallEodClient.FileSigner(); // FileSigner | New file signature request
apiInstance.createPreSignedUrl(fileSigner).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileSigner** | [**FileSigner**](FileSigner.md)| New file signature request | 

### Return type

[**FileSigner**](FileSigner.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## showFileByLetterId

> Letter showFileByLetterId(letterId, fileId)

Info for a specific file

### Example

```javascript
var SmallEodClient = require('small_eod_client');
var defaultClient = SmallEodClient.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEodClient.FileApi();
var letterId = 3.4; // Number | The id of the letter of file
var fileId = 3.4; // Number | The id of the file to retrieve
apiInstance.showFileByLetterId(letterId, fileId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **letterId** | **Number**| The id of the letter of file | 
 **fileId** | **Number**| The id of the file to retrieve | 

### Return type

[**Letter**](Letter.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

