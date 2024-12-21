import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingPublicationSuccess = (state: StateSchema) => state.publications?.deletingSuccess;
