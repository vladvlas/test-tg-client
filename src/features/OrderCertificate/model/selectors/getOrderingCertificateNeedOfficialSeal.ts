import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getOrderingCertificateNeedOfficialSeal = (state: StateSchema) => state.orderingCertificate.data.needOfficialSeal;
