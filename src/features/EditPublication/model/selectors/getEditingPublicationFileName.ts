import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationFileName = (state: StateSchema) => state?.editingPublicationFile.data?.file?.name;
