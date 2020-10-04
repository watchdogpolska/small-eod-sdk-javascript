export default ApiClient;
declare class ApiClient {
    static parseDate(str: string): Date;
    static convertToType(data: (string | any), type: (string | Array<string> | any | Function)): any;
    static constructFromObject(data: any | any[], obj: any | any[], itemType: any): void;
    basePath: string;
    authentications: Array<string>;
    defaultHeaders: Array<string>;
    timeout: number;
    cache: boolean;
    enableCookies: boolean;
    agent: any;
    requestAgent: any;
    plugins: any;
    paramToString(param: any): string;
    buildUrl(path: string, pathParams: any, apiBasePath: string): string;
    isJsonMime(contentType: string): boolean;
    jsonPreferredMime(contentTypes: Array<string>): string;
    isFileParam(param: any): boolean;
    normalizeParams(params: any): any;
    buildCollectionParam(param: any[], collectionFormat: any): string | any[];
    applyAuthToRequest(request: any, authNames: Array<string>): void;
    deserialize(response: any, returnType: (string | Array<string> | any | Function)): any;
    callApi(path: string, httpMethod: string, pathParams: any, queryParams: any, headerParams: any, formParams: any, bodyParam: any, authNames: Array<string>, contentTypes: Array<string>, accepts: Array<string>, returnType: (string | any[] | any), apiBasePath: string): Promise<any>;
    hostSettings(): {
        url: string;
        description: string;
    }[];
    getBasePathFromSettings(index: any, variables?: {}): string;
}
declare namespace ApiClient {
    namespace CollectionFormatEnum {
        const CSV: string;
        const SSV: string;
        const TSV: string;
        const PIPES: string;
        const MULTI: string;
    }
    type CollectionFormatEnum = string;
    const instance: any;
}
