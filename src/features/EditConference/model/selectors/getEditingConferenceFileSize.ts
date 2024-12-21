import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceFileSize = (state: StateSchema) => state?.editingConferenceFile.data?.file?.size;
