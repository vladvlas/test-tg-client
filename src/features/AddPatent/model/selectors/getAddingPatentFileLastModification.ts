import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPatentFileLastModification = (state: StateSchema) => state?.addingPatentFile.data?.file?.lastModification;
