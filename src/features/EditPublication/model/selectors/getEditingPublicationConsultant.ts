import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationConsultant = (state: StateSchema) => state?.editingPublicationFile.data.consultant;
