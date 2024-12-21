import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getOrderingCertificateSuccess = (state: StateSchema) => state.orderingCertificate?.success;
