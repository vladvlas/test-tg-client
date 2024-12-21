import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getOrderingCertificateSpaceRequirement = (state: StateSchema) => state.orderingCertificate.data.spaceRequirement;
