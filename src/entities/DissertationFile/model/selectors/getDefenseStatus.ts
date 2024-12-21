import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDefenseStatus = (state: StateSchema) => state.dissertationFile?.data?.status;
