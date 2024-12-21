import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPatentIsLoading = (state: StateSchema) => state.editingPatentFile.isLoading;
