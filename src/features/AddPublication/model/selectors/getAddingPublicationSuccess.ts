import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationSuccess = (state: StateSchema) => state.addingPublicationFile?.success;
