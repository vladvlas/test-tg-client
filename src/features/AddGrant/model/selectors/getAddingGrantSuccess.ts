import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingGrantSuccess = (state: StateSchema) => state.addingGrantFile?.success;
