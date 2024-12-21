import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingConferenceFileSize = (state: StateSchema) => state?.addingConferenceFile.data?.file?.size;
