import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingConferenceSuccess = (state: StateSchema) => state.conferences?.deletingSuccess;
