import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPatentError = (state: StateSchema) => state.addingPatentFile?.error;
