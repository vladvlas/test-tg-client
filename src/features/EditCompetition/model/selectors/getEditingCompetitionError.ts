import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingCompetitionError = (state: StateSchema) => state.editingCompetition?.error;
