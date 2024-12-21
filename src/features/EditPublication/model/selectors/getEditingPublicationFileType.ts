import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationFileType = (state: StateSchema) => state?.editingPublicationFile.data?.file?.type;
