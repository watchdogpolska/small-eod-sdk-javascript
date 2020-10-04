export default class LettersApi {
    constructor(apiClient?: any);
    apiClient: any;
    lettersCreateWithHttpInfo(data: any): Promise<any>;
    lettersCreate(data: any): Promise<any>;
    lettersDeleteWithHttpInfo(id: number): Promise<any>;
    lettersDelete(id: number): Promise<any>;
    lettersFilesCreateWithHttpInfo(letterPk: string, data: File): Promise<any>;
    lettersFilesCreate(letterPk: string, data: File): Promise<any>;
    lettersFilesDeleteWithHttpInfo(id: string, letterPk: string): Promise<any>;
    lettersFilesDelete(id: string, letterPk: string): Promise<any>;
    lettersFilesListWithHttpInfo(letterPk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    lettersFilesList(letterPk: string, opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    lettersFilesPartialUpdateWithHttpInfo(id: string, letterPk: string, data: File): Promise<any>;
    lettersFilesPartialUpdate(id: string, letterPk: string, data: File): Promise<any>;
    lettersFilesReadWithHttpInfo(id: string, letterPk: string): Promise<any>;
    lettersFilesRead(id: string, letterPk: string): Promise<any>;
    lettersFilesSignCreateWithHttpInfo(data: any): Promise<any>;
    lettersFilesSignCreate(data: any): Promise<any>;
    lettersFilesUpdateWithHttpInfo(id: string, letterPk: string, data: File): Promise<any>;
    lettersFilesUpdate(id: string, letterPk: string, data: File): Promise<any>;
    lettersListWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    lettersList(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    lettersPartialUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    lettersPartialUpdate(id: number, data: any): Promise<any>;
    lettersReadWithHttpInfo(id: number): Promise<any>;
    lettersRead(id: number): Promise<any>;
    lettersUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    lettersUpdate(id: number, data: any): Promise<any>;
}
