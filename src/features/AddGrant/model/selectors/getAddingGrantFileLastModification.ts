import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingGrantFileLastModification = (state: StateSchema) => state?.addingGrantFile.data?.file?.lastModification;
