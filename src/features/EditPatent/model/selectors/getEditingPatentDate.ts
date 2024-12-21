import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPatentDate = (state: StateSchema) => state?.editingPatentFile.data.date;
