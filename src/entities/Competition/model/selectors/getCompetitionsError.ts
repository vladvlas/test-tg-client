import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getCompetitionsError = (state: StateSchema) => state.competition?.error;
