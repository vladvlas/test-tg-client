import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDissertationAddSuccess = (state: StateSchema) => state.dissertationFile?.success;
