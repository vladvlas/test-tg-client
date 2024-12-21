import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationEdition = (state: StateSchema) => state?.editingPublicationFile.data.edition;
