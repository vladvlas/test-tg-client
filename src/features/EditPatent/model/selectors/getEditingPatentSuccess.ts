import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPatentSuccess = (state: StateSchema) => state.editingPatentFile?.success;
