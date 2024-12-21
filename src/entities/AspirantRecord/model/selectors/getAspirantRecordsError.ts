import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAspirantRecordsError = (state: StateSchema) => state.aspirantsRecords?.error;
