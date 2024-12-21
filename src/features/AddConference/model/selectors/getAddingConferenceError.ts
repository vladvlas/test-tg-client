import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingConferenceError = (state: StateSchema) => state.addingConferenceFile?.error;
