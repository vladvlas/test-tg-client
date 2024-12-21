import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingCompetitionResult = (state: StateSchema) => state?.addingCompetition.data.result;
