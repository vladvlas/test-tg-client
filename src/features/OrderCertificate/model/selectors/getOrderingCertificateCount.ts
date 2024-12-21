import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getOrderingCertificateCount = (state: StateSchema) => state.orderingCertificate.data.count;
