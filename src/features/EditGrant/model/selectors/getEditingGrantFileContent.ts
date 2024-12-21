import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingGrantFileContent = (state: StateSchema) => state?.editingGrantFile.data?.file?.content;
