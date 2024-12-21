import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceFileContent = (state: StateSchema) => state?.editingConferenceFile.data?.file?.content;
