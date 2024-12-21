import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceFileType = (state: StateSchema) => state?.editingConferenceFile.data?.file?.type;
