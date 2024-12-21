import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPatentFileSize = (state: StateSchema) => state?.editingPatentFile.data?.file?.size;
