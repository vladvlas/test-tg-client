import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getOrderCertificateRecordError = (state: StateSchema) => state.orderCertificateRecords.error;
