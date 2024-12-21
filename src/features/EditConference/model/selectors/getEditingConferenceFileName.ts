import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceFileName = (state: StateSchema) => state?.editingConferenceFile.data?.file?.name;
