import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getApplicantsRecordsError = (state: StateSchema) => state.applicantsRecords?.error;
