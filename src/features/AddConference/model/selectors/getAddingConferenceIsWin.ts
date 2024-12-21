import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingConferenceIsWin = (state: StateSchema) => state?.addingConferenceFile.data.isWin;
