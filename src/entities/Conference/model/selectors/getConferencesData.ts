import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getConferencesData = (state: StateSchema) => state.conferences?.data;
