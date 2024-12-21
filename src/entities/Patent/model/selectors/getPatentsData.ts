import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getPatentsData = (state: StateSchema) => state.patent.data;
