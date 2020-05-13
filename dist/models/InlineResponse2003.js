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
const _1 = require("./");
function InlineResponse2003FromJSON(json) {
    return InlineResponse2003FromJSONTyped(json, false);
}
exports.InlineResponse2003FromJSON = InlineResponse2003FromJSON;
function InlineResponse2003FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': json['count'],
        'results': (json['results'].map(_1.CollectionFromJSON)),
        'next': !runtime_1.exists(json, 'next') ? undefined : json['next'],
        'previous': !runtime_1.exists(json, 'previous') ? undefined : json['previous'],
    };
}
exports.InlineResponse2003FromJSONTyped = InlineResponse2003FromJSONTyped;
function InlineResponse2003ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'results': (value.results.map(_1.CollectionToJSON)),
        'next': value.next,
        'previous': value.previous,
    };
}
exports.InlineResponse2003ToJSON = InlineResponse2003ToJSON;
