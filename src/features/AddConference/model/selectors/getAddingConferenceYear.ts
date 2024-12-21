import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingConferenceYear = (state: StateSchema) => state?.addingConferenceFile.data.year;
