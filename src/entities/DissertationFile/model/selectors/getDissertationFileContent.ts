import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDissertationFileContent = (state: StateSchema) => state.dissertationFile?.data?.file?.content;
