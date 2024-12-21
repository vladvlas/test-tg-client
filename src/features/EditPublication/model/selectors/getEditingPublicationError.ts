import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationError = (state: StateSchema) => state.editingPublicationFile?.error;
