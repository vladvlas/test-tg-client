import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDeletingPublicationError = (state: StateSchema) => state.publications?.deletingError;
