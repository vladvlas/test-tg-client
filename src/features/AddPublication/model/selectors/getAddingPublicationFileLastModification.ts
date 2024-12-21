import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationFileLastModification = (state: StateSchema) => state?.addingPublicationFile.data?.file?.lastModification;
