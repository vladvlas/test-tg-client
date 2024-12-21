import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationEdition = (state: StateSchema) => state?.addingPublicationFile.data.edition;
