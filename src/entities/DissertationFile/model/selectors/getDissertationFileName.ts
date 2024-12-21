import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDissertationFileName = (state: StateSchema) => state.dissertationFile?.data?.file?.name;
