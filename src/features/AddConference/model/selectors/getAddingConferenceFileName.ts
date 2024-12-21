import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingConferenceFileName = (state: StateSchema) => state?.addingConferenceFile.data?.file?.name;
