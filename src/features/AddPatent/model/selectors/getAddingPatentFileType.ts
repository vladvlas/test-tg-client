import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPatentFileType = (state: StateSchema) => state?.addingPatentFile.data?.file?.type;
