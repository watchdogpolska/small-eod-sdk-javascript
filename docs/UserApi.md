# SmallEod.UserApi

All URIs are relative to *https://small-eod.siecobywatelska.pl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserApi.md#createUser) | **POST** /user | Create a user
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /user/{userId} | 
[**listUser**](UserApi.md#listUser) | **GET** /user | List all users
[**showUserById**](UserApi.md#showUserById) | **GET** /user/{userId} | Info for a specific user



## createUser

> User createUser(user)

Create a user

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.UserApi();
var user = new SmallEod.User(); // User | New user
apiInstance.createUser(user).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| New user | 

### Return type

[**User**](User.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUser

> deleteUser(userId)



Deletes a single user based on the ID supplied

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.UserApi();
var userId = 789; // Number | The id of the user to delete
apiInstance.deleteUser(userId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user to delete | 

### Return type

null (empty response body)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUser

> [User] listUser(opts)

List all users

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.UserApi();
var opts = {
  'limit': 56, // Number | How many items to return at one time (max 100)
  'offset': 56 // Number | How many items skip in return
};
apiInstance.listUser(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many items to return at one time (max 100) | [optional] 
 **offset** | **Number**| How many items skip in return | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## showUserById

> User showUserById(userId)

Info for a specific user

### Example

```javascript
var SmallEod = require('small_eod');
var defaultClient = SmallEod.ApiClient.instance;
// Configure API key authorization: sessionAuth
var sessionAuth = defaultClient.authentications['sessionAuth'];
sessionAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//sessionAuth.apiKeyPrefix = 'Token';

var apiInstance = new SmallEod.UserApi();
var userId = 3.4; // Number | The id of the user to retrieve
apiInstance.showUserById(userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The id of the user to retrieve | 

### Return type

[**User**](User.md)

### Authorization

[sessionAuth](../README.md#sessionAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

