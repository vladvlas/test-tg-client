import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingGrantTitle = (state: StateSchema) => state?.editingGrantFile.data.title;
