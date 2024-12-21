import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingGrantSuccess = (state: StateSchema) => state.editingGrantFile?.success;
