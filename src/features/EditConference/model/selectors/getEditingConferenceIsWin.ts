import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceIsWin = (state: StateSchema) => state?.editingConferenceFile.data.isWin;
