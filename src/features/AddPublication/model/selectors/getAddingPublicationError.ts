import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationError = (state: StateSchema) => state.addingPublicationFile?.error;
