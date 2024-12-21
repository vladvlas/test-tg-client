import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationTitle = (state: StateSchema) => state?.editingPublicationFile.data.title;
