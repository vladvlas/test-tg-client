import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingConferenceError = (state: StateSchema) => state.conferences?.deletingError;
