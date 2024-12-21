import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingCompetitionsSuccess = (state: StateSchema) => state.competition?.deletingSuccess;
