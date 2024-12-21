import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingGrantsSuccess = (state: StateSchema) => state.grant?.deletingSuccess;
