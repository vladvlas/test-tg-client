import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationTitle = (state: StateSchema) => state?.addingPublicationFile.data.title;
