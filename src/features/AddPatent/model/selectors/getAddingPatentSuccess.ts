import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPatentSuccess = (state: StateSchema) => state.addingPatentFile?.success;
