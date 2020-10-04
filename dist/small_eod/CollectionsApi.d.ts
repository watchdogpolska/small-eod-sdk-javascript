export default class CollectionsApi {
    constructor(apiClient?: any);
    apiClient: any;
    collectionsCasesEventsListWithHttpInfo(casePk: string, collectionPk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    collectionsCasesEventsList(casePk: string, collectionPk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    collectionsCasesEventsReadWithHttpInfo(casePk: string, collectionPk: string, id: string): Promise<any>;
    collectionsCasesEventsRead(casePk: string, collectionPk: string, id: string): Promise<any>;
    collectionsCasesLettersListWithHttpInfo(casePk: string, collectionPk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    collectionsCasesLettersList(casePk: string, collectionPk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    collectionsCasesLettersReadWithHttpInfo(casePk: string, collectionPk: string, id: string): Promise<any>;
    collectionsCasesLettersRead(casePk: string, collectionPk: string, id: string): Promise<any>;
    collectionsCasesListWithHttpInfo(collectionPk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    collectionsCasesList(collectionPk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    collectionsCasesNotesListWithHttpInfo(casePk: string, collectionPk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    collectionsCasesNotesList(casePk: string, collectionPk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    collectionsCasesNotesReadWithHttpInfo(casePk: string, collectionPk: string, id: string): Promise<any>;
    collectionsCasesNotesRead(casePk: string, collectionPk: string, id: string): Promise<any>;
    collectionsCasesReadWithHttpInfo(collectionPk: string, id: string): Promise<any>;
    collectionsCasesRead(collectionPk: string, id: string): Promise<any>;
    collectionsCreateWithHttpInfo(data: any): Promise<any>;
    collectionsCreate(data: any): Promise<any>;
    collectionsDeleteWithHttpInfo(id: number): Promise<any>;
    collectionsDelete(id: number): Promise<any>;
    collectionsListWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    collectionsList(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    collectionsPartialUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    collectionsPartialUpdate(id: number, data: any): Promise<any>;
    collectionsReadWithHttpInfo(id: number): Promise<any>;
    collectionsRead(id: number): Promise<any>;
    collectionsTokensCreateWithHttpInfo(collectionPk: string, data: any): Promise<any>;
    collectionsTokensCreate(collectionPk: string, data: any): Promise<any>;
    collectionsUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    collectionsUpdate(id: number, data: any): Promise<any>;
}
