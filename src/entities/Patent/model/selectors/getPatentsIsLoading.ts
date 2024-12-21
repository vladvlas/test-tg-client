import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getPatentsIsLoading = (state: StateSchema) => state.patent.isLoading;
