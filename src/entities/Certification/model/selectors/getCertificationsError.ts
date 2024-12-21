import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getCertificationsError = (state: StateSchema) => state.certification?.error;
