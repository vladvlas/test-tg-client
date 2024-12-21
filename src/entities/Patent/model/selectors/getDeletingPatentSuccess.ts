import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingPatentSuccess = (state: StateSchema) => state.patent?.deletingSuccess;
