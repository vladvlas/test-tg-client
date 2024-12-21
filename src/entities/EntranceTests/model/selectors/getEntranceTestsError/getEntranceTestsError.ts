import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEntranceTestsError = (state: StateSchema) => state.entranceTests?.error;
