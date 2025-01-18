import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDevicesData = (state: StateSchema) => state.devices?.data;
