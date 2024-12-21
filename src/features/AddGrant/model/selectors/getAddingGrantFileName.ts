import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingGrantFileName = (state: StateSchema) => state?.addingGrantFile.data?.file?.name;
