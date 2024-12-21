import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceIsLoading = (state: StateSchema) => state.editingConferenceFile.isLoading;
