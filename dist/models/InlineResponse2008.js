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
function InlineResponse2008FromJSON(json) {
    return InlineResponse2008FromJSONTyped(json, false);
}
exports.InlineResponse2008FromJSON = InlineResponse2008FromJSON;
function InlineResponse2008FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': json['count'],
        'results': (json['results'].map(_1.DescriptionFromJSON)),
        'next': !runtime_1.exists(json, 'next') ? undefined : json['next'],
        'previous': !runtime_1.exists(json, 'previous') ? undefined : json['previous'],
    };
}
exports.InlineResponse2008FromJSONTyped = InlineResponse2008FromJSONTyped;
function InlineResponse2008ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'results': (value.results.map(_1.DescriptionToJSON)),
        'next': value.next,
        'previous': value.previous,
    };
}
exports.InlineResponse2008ToJSON = InlineResponse2008ToJSON;