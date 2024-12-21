import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPatentError = (state: StateSchema) => state.editingPatentFile?.error;
