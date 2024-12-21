import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingCompetitionsIsLoading = (state: StateSchema) => state.competition.isDeletingLoading;
