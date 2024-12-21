import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingGrantIsLoading = (state: StateSchema) => state.editingGrantFile.isLoading;
