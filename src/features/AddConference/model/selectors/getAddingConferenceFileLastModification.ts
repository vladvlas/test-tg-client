import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingConferenceFileLastModification = (state: StateSchema) => state?.addingConferenceFile.data?.file?.lastModification;
