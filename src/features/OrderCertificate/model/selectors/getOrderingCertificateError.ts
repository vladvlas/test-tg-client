import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getOrderingCertificateError = (state: StateSchema) => state.orderingCertificate?.error;
