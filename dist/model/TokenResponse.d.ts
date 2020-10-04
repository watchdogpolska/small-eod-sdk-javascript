export default TokenResponse;
declare class TokenResponse {
    static initialize(obj: any, accessToken: any, refreshToken: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(accessToken: string, refreshToken: string);
    accessToken: any;
    refreshToken: any;
    expiresIn: any;
}
