import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDoctorantRecordsError = (state: StateSchema) => state.doctorantsRecords?.error;
