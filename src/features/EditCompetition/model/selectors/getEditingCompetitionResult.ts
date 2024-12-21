import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingCompetitionResult = (state: StateSchema) => state?.editingCompetition.data.result;
