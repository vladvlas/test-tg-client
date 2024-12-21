import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getCertificationsIsLoading = (state: StateSchema) => state.certification.isLoading;
