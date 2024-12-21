import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingGrantError = (state: StateSchema) => state.grant?.deletingError;
