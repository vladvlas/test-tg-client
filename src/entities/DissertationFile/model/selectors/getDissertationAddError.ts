import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDissertationAddError = (state: StateSchema) => state.dissertationFile?.addError;
