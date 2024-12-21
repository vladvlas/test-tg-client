import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingGrantIsLoading = (state: StateSchema) => state.grant.isDeletingLoading;
