import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingGrantFileLastModification = (state: StateSchema) => state?.editingGrantFile.data?.file?.lastModification;
