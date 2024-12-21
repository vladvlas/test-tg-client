import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAdviserIsLoading = (state: StateSchema) => state.adviser.isLoading;
