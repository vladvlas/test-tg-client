import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPatentTitle = (state: StateSchema) => state?.editingPatentFile.data.title;
