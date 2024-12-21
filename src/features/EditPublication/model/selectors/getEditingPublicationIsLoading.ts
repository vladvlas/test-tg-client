import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPublicationIsLoading = (state: StateSchema) => state.editingPublicationFile.isLoading;
