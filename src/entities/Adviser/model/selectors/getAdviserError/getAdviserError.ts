import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAdviserError = (state: StateSchema) => state.adviser?.error;
