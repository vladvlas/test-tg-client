import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationYear = (state: StateSchema) => state?.editingPublicationFile.data.year;
