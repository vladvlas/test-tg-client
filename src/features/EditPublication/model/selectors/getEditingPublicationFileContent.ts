import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationFileContent = (state: StateSchema) => state?.editingPublicationFile.data?.file?.content;
