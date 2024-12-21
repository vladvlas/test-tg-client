import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationFileSize = (state: StateSchema) => state?.addingPublicationFile.data?.file?.size;
