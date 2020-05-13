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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class DescriptionsApi extends runtime.BaseAPI {
    /**
     */
    descriptionsCreateRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.data === null || requestParameters.data === undefined) {
                throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling descriptionsCreate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/descriptions/`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.DescriptionToJSON(requestParameters.data),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.DescriptionFromJSON(jsonValue));
        });
    }
    /**
     */
    descriptionsCreate(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.descriptionsCreateRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     */
    descriptionsDeleteRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling descriptionsDelete.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/descriptions/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    descriptionsDelete(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.descriptionsDeleteRaw(requestParameters);
        });
    }
    /**
     */
    descriptionsListRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            const headerParameters = {};
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/descriptions/`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.InlineResponse2008FromJSON(jsonValue));
        });
    }
    /**
     */
    descriptionsList(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.descriptionsListRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     */
    descriptionsPartialUpdateRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling descriptionsPartialUpdate.');
            }
            if (requestParameters.data === null || requestParameters.data === undefined) {
                throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling descriptionsPartialUpdate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/descriptions/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.DescriptionToJSON(requestParameters.data),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.DescriptionFromJSON(jsonValue));
        });
    }
    /**
     */
    descriptionsPartialUpdate(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.descriptionsPartialUpdateRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     */
    descriptionsReadRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling descriptionsRead.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/descriptions/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.DescriptionFromJSON(jsonValue));
        });
    }
    /**
     */
    descriptionsRead(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.descriptionsReadRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     */
    descriptionsUpdateRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling descriptionsUpdate.');
            }
            if (requestParameters.data === null || requestParameters.data === undefined) {
                throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling descriptionsUpdate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/descriptions/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.DescriptionToJSON(requestParameters.data),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.DescriptionFromJSON(jsonValue));
        });
    }
    /**
     */
    descriptionsUpdate(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.descriptionsUpdateRaw(requestParameters);
            return yield response.value();
        });
    }
}
exports.DescriptionsApi = DescriptionsApi;
