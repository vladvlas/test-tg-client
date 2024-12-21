import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getPublicationsIsLoading = (state: StateSchema) => state.publications.isLoading;
