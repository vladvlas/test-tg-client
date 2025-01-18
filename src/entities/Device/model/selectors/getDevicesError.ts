import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDevicesError = (state: StateSchema) => state.devices?.error;
