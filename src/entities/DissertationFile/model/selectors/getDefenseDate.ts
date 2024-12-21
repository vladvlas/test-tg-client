import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDefenseDate = (state: StateSchema) => state.dissertationFile?.data?.defenseDate;
