import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationFile = (state: StateSchema) => state?.editingPublicationFile.data.file;
