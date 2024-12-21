import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPatentFileName = (state: StateSchema) => state?.addingPatentFile.data?.file?.name;
