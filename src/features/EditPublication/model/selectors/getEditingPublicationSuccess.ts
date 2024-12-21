import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationSuccess = (state: StateSchema) => state.editingPublicationFile?.success;
