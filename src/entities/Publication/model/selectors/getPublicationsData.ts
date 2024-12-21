import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getPublicationsData = (state: StateSchema) => state.publications?.data;
