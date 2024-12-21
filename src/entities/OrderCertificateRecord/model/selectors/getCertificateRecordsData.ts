import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getCertificateRecordsData = (state: StateSchema) => state.orderCertificateRecords.data;
