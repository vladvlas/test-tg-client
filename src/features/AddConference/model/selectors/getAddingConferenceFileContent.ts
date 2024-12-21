import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingConferenceFileContent = (state: StateSchema) => state?.addingConferenceFile.data?.file?.content;
