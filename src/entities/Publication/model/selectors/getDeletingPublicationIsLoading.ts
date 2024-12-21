import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingPublicationIsLoading = (state: StateSchema) => state.publications.isDeletingLoading;
