import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationFileSize = (state: StateSchema) => state?.editingPublicationFile.data?.file?.size;
