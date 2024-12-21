import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationFileContent = (state: StateSchema) => state?.addingPublicationFile.data?.file?.content;
