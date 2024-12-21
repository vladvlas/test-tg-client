import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingCompetitionTitle = (state: StateSchema) => state?.addingCompetition.data.title;
