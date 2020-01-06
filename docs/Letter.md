# SmallEod.Letter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**name** | **String** |  | 
**direction** | **String** | Direction | 
**channel** | **String** | Channel | 
**_final** | **Boolean** | The status of the letter, e.g. deciding about visibility in the collection | [optional] 
**data** | **Date** | Date of receipt / Date of dispatch | [optional] 
**identifier** | **String** | External identifier of letter / case | [optional] 
**institution** | **[Number]** |  | [optional] 
**address** | [**AddressData**](AddressData.md) |  | [optional] 
**_case** | **String** |  | [optional] 
**attachment** | **[File]** |  | [optional] 
**ordering** | **Number** |  | [optional] [default to 0]
**comment** | **String** |  | [optional] 
**excerpt** | **String** |  | [optional] 
**tags** | **[String]** |  | [optional] 
**createdOn** | **String** |  | [readonly] 
**createdBy** | **String** | User ID responsible for creating the content | [readonly] 
**modifiedOn** | **String** |  | [readonly] 
**modifiedBy** | **String** |  | [readonly] 



## Enum: DirectionEnum


* `received` (value: `"received"`)

* `send` (value: `"send"`)




