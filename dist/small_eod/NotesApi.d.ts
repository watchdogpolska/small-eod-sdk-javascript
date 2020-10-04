export default class NotesApi {
    constructor(apiClient?: any);
    apiClient: any;
    notesCreateWithHttpInfo(data: any): Promise<any>;
    notesCreate(data: any): Promise<any>;
    notesDeleteWithHttpInfo(id: number): Promise<any>;
    notesDelete(id: number): Promise<any>;
    notesListWithHttpInfo(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    notesList(opts: {
        limit: number;
        offset: number;
    }): Promise<any>;
    notesPartialUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    notesPartialUpdate(id: number, data: any): Promise<any>;
    notesReadWithHttpInfo(id: number): Promise<any>;
    notesRead(id: number): Promise<any>;
    notesUpdateWithHttpInfo(id: number, data: any): Promise<any>;
    notesUpdate(id: number, data: any): Promise<any>;
}
