import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getProfileIsLoading = (state: StateSchema) => state?.employeeProfile?.isLoading;
