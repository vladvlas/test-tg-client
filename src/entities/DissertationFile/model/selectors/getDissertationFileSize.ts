import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDissertationFileSize = (state: StateSchema) => state.dissertationFile?.data?.file?.size;
