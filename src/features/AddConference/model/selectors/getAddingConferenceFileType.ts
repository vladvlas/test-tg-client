import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingConferenceFileType = (state: StateSchema) => state?.addingConferenceFile.data?.file?.type;
