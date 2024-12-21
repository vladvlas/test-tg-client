import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceYear = (state: StateSchema) => state?.editingConferenceFile.data.year;
