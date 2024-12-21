import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingCompetitionSuccess = (state: StateSchema) => state.editingCompetition?.success;
