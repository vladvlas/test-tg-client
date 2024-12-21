import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPatentFileContent = (state: StateSchema) => state?.addingPatentFile.data?.file?.content;
