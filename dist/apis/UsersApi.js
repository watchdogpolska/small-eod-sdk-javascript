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
class UsersApi extends runtime.BaseAPI {
    /**
     * API endpoint that allows users to be viewed or edited.
     */
    usersCreateRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.data === null || requestParameters.data === undefined) {
                throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling usersCreate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/users/`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.UserToJSON(requestParameters.data),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.UserFromJSON(jsonValue));
        });
    }
    /**
     * API endpoint that allows users to be viewed or edited.
     */
    usersCreate(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.usersCreateRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * API endpoint that allows users to be viewed or edited.
     */
    usersDeleteRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling usersDelete.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/users/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * API endpoint that allows users to be viewed or edited.
     */
    usersDelete(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.usersDeleteRaw(requestParameters);
        });
    }
    /**
     * API endpoint that allows users to be viewed or edited.
     */
    usersListRaw(requestParameters) {
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
                path: `/users/`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.InlineResponse2001FromJSON(jsonValue));
        });
    }
    /**
     * API endpoint that allows users to be viewed or edited.
     */
    usersList(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.usersListRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * API endpoint that allows users to be viewed or edited.
     */
    usersPartialUpdateRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling usersPartialUpdate.');
            }
            if (requestParameters.data === null || requestParameters.data === undefined) {
                throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling usersPartialUpdate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/users/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.UserToJSON(requestParameters.data),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.UserFromJSON(jsonValue));
        });
    }
    /**
     * API endpoint that allows users to be viewed or edited.
     */
    usersPartialUpdate(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.usersPartialUpdateRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * API endpoint that allows users to be viewed or edited.
     */
    usersReadRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling usersRead.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/users/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.UserFromJSON(jsonValue));
        });
    }
    /**
     * API endpoint that allows users to be viewed or edited.
     */
    usersRead(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.usersReadRaw(requestParameters);
            return yield response.value();
        });
    }
    /**
     * API endpoint that allows users to be viewed or edited.
     */
    usersUpdateRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling usersUpdate.');
            }
            if (requestParameters.data === null || requestParameters.data === undefined) {
                throw new runtime.RequiredError('data', 'Required parameter requestParameters.data was null or undefined when calling usersUpdate.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            const response = yield this.request({
                path: `/users/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.UserToJSON(requestParameters.data),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.UserFromJSON(jsonValue));
        });
    }
    /**
     * API endpoint that allows users to be viewed or edited.
     */
    usersUpdate(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.usersUpdateRaw(requestParameters);
            return yield response.value();
        });
    }
}
exports.UsersApi = UsersApi;
