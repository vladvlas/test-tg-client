import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getConferencesIsLoading = (state: StateSchema) => state.conferences.isLoading;
