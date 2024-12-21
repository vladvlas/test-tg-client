import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingGrantFileType = (state: StateSchema) => state?.addingGrantFile.data?.file?.type;
