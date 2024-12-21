import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPatentFileSize = (state: StateSchema) => state?.addingPatentFile.data?.file?.size;
