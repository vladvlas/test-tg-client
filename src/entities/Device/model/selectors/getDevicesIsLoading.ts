import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDevicesIsLoading = (state: StateSchema) => state.devices?.isLoading;
