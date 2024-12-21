import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPatentFileType = (state: StateSchema) => state?.editingPatentFile.data?.file?.type;
