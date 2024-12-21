import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationFileLastModification = (state: StateSchema) => state?.editingPublicationFile.data?.file?.lastModification;
