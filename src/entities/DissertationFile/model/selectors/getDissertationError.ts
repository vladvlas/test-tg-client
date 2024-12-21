import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDissertationError = (state: StateSchema) => state.dissertationFile?.error;
