export default class FeaturesApi {
    constructor(apiClient?: any);
    apiClient: any;
    featuresCreateWithHttpInfo(data: any): Promise<any>;
    featuresCreate(data: any): Promise<any>;
    featuresDeleteWithHttpInfo(id: number): Promise<any>;
    featuresDelete(id: number): Promise<any>;
    featuresFeatureoptionCreateWithHttpInfo(featurePk: string, data: any): Promise<any>;
    featuresFeatureoptionCreate(featurePk: string, data: any): Promise<any>;
    featuresFeatureoptionDeleteWithHttpInfo(featurePk: string, id: string): Promise<any>;
    featuresFeatureoptionDelete(featurePk: string, id: string): Promise<any>;
    featuresFeatureoptionListWithHttpInfo(featurePk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    featuresFeatureoptionList(featurePk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    featuresFeatureoptionPartialUpdateWithHttpInfo(featurePk: string, id: string, data: any): Promise<any>;
    featuresFeatureoptionPartialUpdate(featurePk: string, id: string, data: any): Promise<any>;
    featuresFeatureoptionReadWithHttpInfo(featurePk: string, id: string): Promise<any>;
    featuresFeatureoptionRead(featurePk: string, id: string): Promise<any>;
    featuresFeatureoptionUpdateWithHttpInfo(featurePk: string, id: string, data: any): Promise<any>;
    featuresFeatureoptionUpdate(featurePk: string, id: string, data: any): Promise<any>;
    featuresListWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    featuresList(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    featuresPartialUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    featuresPartialUpdate(id: number, data: any): Promise<any>;
    featuresReadWithHttpInfo(id: number): Promise<any>;
    featuresRead(id: number): Promise<any>;
    featuresUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    featuresUpdate(id: number, data: any): Promise<any>;
}
