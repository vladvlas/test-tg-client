import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingPatentError = (state: StateSchema) => state.patent?.deletingError;
