import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingGrantFileType = (state: StateSchema) => state?.editingGrantFile.data?.file?.type;
