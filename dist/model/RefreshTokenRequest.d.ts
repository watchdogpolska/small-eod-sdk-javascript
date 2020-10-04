export default RefreshTokenRequest;
declare class RefreshTokenRequest {
    static initialize(obj: any, refreshToken: any): void;
    static constructFromObject(data: any, obj: any): any;
    constructor(refreshToken: string);
    refreshToken: any;
}
