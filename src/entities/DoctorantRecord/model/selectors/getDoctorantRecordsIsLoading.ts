import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDoctorantRecordsIsLoading = (state: StateSchema) => state.doctorantsRecords.isLoading;
