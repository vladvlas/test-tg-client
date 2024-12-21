import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationIsLoading = (state: StateSchema) => state.addingPublicationFile.isLoading;
