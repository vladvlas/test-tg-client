import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getDissertationFileLastModification = (state: StateSchema) => state.dissertationFile?.data?.file?.lastModification;
