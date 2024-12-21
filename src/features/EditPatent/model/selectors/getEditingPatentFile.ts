import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPatentFile = (state: StateSchema) => state?.editingPatentFile.data.file;
