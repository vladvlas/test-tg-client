import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPatentDate = (state: StateSchema) => state?.addingPatentFile.data.date;
