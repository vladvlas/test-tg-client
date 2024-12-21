import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceSuccess = (state: StateSchema) => state.editingConferenceFile?.success;
