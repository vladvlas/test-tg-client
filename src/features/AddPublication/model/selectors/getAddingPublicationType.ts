import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationType = (state: StateSchema) => state?.addingPublicationFile.data.publicationType;
