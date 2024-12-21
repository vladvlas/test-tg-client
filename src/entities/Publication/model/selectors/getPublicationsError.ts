import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getPublicationsError = (state: StateSchema) => state.publications?.error;
