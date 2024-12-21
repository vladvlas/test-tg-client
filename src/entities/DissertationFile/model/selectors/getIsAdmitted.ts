import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getIsAdmitted = (state: StateSchema) => state.dissertationFile?.data?.isAdmitted;
