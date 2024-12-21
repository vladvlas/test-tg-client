import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingGrantFileSize = (state: StateSchema) => state?.addingGrantFile.data?.file?.size;
