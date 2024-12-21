import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDissertationIsAddLoading= (state: StateSchema) => state.dissertationFile?.isAddLoading;
