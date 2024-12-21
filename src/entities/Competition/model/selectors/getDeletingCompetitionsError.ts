import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingCompetitionsError = (state: StateSchema) => state.competition?.deletingError;
