import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingConferenceLevel = (state: StateSchema) => state?.addingConferenceFile.data.level;
