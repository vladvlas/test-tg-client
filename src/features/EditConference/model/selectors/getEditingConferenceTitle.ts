import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceTitle = (state: StateSchema) => state?.editingPublicationFile.data.title;
