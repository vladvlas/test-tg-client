import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingCompetitionTitle = (state: StateSchema) => state?.editingCompetition.data.title;
