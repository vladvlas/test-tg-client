import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingConferenceIsLoading = (state: StateSchema) => state.addingConferenceFile.isLoading;
