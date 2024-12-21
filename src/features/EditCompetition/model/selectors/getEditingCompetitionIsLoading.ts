import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingCompetitionIsLoading = (state: StateSchema) => state.editingCompetition.isLoading;
