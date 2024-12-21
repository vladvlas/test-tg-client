import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingCompetitionYear = (state: StateSchema) => state?.editingCompetition.data.year;
