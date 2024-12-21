import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingGrantError = (state: StateSchema) => state.editingGrantFile?.error;
