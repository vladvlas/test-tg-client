import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingCompetitionError = (state: StateSchema) => state.addingCompetition?.error;
