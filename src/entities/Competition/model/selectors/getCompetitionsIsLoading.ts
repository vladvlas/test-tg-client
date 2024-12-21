import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getCompetitionsIsLoading = (state: StateSchema) => state.competition.isLoading;
