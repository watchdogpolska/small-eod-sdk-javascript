# SmallEodClient.ModelCase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [readonly] 
**name** | **String** | Name of case | 
**comment** | **String** | Comment available for team | [optional] 
**tag** | **[String]** | List of tag which apply to case | [optional] 
**auditedInstitution** | [**[CaseAuditedInstitution]**](CaseAuditedInstitution.md) | List of audited institution | [optional] 
**responsibleUser** | [**[UserRef]**](UserRef.md) | List of users responsible for the case | [optional] 
**notifiedUser** | [**[UserRef]**](UserRef.md) | List of users which receive notifications | [optional] 
**matrix** | [**[CaseMatrix]**](CaseMatrix.md) | Structure to collect statistical information in relation to Dictionary | [optional] 
**letterCount** | **Number** | Count of letter in case | [optional] [readonly] 
**noteCount** | **Number** | Count of note in case | [optional] [readonly] 
**createdOn** | **String** |  | [readonly] 
**createdBy** | **String** | User ID responsible for creating the content | [readonly] 
**modifiedOn** | **String** |  | [readonly] 
**modifiedBy** | **String** |  | [readonly] 


