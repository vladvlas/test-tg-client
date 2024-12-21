import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationFileType = (state: StateSchema) => state?.addingPublicationFile.data?.file?.type;
