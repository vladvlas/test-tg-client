import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingConferenceIsLoading = (state: StateSchema) => state.conferences.isDeletingLoading;
