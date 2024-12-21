import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingPatentIsLoading = (state: StateSchema) => state.patent.isDeletingLoading;
