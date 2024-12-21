import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getCertificationsData = (state: StateSchema) => state.certification?.data;
