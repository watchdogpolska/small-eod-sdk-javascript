"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const runtime_1 = require("../runtime");
function ExternalIdentifierNestedFromJSON(json) {
    return ExternalIdentifierNestedFromJSONTyped(json, false);
}
exports.ExternalIdentifierNestedFromJSON = ExternalIdentifierNestedFromJSON;
function ExternalIdentifierNestedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nip': !runtime_1.exists(json, 'nip') ? undefined : json['nip'],
        'regon': !runtime_1.exists(json, 'regon') ? undefined : json['regon'],
    };
}
exports.ExternalIdentifierNestedFromJSONTyped = ExternalIdentifierNestedFromJSONTyped;
function ExternalIdentifierNestedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nip': value.nip,
        'regon': value.regon,
    };
}
exports.ExternalIdentifierNestedToJSON = ExternalIdentifierNestedToJSON;
