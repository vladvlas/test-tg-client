import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationType = (state: StateSchema) => state?.editingPublicationFile.data.publicationType;
