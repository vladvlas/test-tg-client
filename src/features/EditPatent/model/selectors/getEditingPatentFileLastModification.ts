import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingPatentFileLastModification = (state: StateSchema) => state?.editingPatentFile.data?.file?.lastModification;
