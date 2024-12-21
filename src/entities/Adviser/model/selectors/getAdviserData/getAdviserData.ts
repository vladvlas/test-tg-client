import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAdviserData = (state: StateSchema) => state.adviser?.data;
