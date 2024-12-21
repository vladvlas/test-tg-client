import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceLevel = (state: StateSchema) => state?.editingConferenceFile.data.level;
