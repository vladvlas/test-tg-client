import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingGrantIsLoading = (state: StateSchema) => state.addingGrantFile.isLoading;
