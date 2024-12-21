import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingGrantError = (state: StateSchema) => state.addingGrantFile?.error;
