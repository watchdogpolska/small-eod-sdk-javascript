"use strict";
// tslint:disable
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
// Some imports not used depending on template conditions
// @ts-ignore
const axios_1 = require("axios");
exports.BASE_PATH = "http://backend/api".replace(/\/+$/, "");
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPI {
    constructor(configuration, basePath = exports.BASE_PATH, axios = axios_1.default) {
        this.basePath = basePath;
        this.axios = axios;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
exports.RequiredError = RequiredError;
