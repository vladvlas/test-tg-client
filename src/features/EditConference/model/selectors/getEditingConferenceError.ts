import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceError = (state: StateSchema) => state.editingConferenceFile?.error;
