import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingCompetitionYear = (state: StateSchema) => state?.addingCompetition.data.year;
