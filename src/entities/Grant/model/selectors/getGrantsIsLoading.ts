import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getGrantsIsLoading = (state: StateSchema) => state.grant.isLoading;
