import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getGrantsData = (state: StateSchema) => state.grant.data;
