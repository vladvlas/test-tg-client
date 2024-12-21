import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getConferencesError = (state: StateSchema) => state.conferences?.error;
