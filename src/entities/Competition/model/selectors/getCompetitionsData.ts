import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getCompetitionsData = (state: StateSchema) => state.competition?.data;
