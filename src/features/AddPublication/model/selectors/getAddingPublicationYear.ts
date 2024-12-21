import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationYear = (state: StateSchema) => state?.addingPublicationFile.data.year;
