import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceFileLastModification = (state: StateSchema) => state?.editingConferenceFile.data?.file?.lastModification;
