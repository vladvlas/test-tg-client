import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDissertationFileType = (state: StateSchema) => state.dissertationFile?.data?.file?.type;
