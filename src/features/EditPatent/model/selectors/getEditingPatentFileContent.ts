import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPatentFileContent = (state: StateSchema) => state?.editingPatentFile.data?.file?.content;
