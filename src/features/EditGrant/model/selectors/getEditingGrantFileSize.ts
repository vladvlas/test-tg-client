import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingGrantFileSize = (state: StateSchema) => state?.editingGrantFile.data?.file?.size;
