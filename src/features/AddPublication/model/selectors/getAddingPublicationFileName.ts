import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationFileName = (state: StateSchema) => state?.addingPublicationFile.data?.file?.name;
