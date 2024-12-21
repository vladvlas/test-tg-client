import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAdviserRecordsError = (state: StateSchema) => state.advisersRecords?.error;
