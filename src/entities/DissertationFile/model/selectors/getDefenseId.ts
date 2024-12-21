import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDefenseId = (state: StateSchema) => state.dissertationFile?.data?.id;
