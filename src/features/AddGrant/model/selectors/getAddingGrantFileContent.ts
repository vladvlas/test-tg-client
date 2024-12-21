import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingGrantFileContent = (state: StateSchema) => state?.addingGrantFile.data?.file?.content;
