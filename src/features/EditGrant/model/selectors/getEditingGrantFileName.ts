import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingGrantFileName = (state: StateSchema) => state?.editingGrantFile.data?.file?.name;
