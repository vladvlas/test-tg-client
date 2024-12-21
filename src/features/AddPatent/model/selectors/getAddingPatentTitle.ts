import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPatentTitle = (state: StateSchema) => state?.addingPatentFile.data.title;
