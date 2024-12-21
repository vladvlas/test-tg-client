import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDissertationIsLoading = (state: StateSchema) => state.dissertationFile?.isLoading;
