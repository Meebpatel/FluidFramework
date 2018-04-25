import * as api from "../../api-core";

export class TestDeltaStorageService implements api.IDeltaStorageService {
    public get(tenantId: string, id: string, from?: number, to?: number): Promise<api.ISequencedDocumentMessage[]> {
        return new Promise<api.ISequencedDocumentMessage[]>((resolve, reject) => {
            resolve([]);
        });
    }
}
