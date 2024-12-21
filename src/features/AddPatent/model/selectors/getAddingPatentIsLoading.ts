import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPatentIsLoading = (state: StateSchema) => state.addingPatentFile.isLoading;
