import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getPatentsError = (state: StateSchema) => state.patent?.error;
