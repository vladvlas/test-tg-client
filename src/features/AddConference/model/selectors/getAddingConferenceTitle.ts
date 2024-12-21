import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingConferenceTitle = (state: StateSchema) => state?.addingConferenceFile.data.title;
