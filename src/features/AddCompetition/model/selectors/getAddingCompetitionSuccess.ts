import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingCompetitionSuccess = (state: StateSchema) => state.addingCompetition?.success;
