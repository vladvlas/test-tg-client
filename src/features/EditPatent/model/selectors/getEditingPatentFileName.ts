import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPatentFileName = (state: StateSchema) => state?.editingPatentFile.data?.file?.name;
