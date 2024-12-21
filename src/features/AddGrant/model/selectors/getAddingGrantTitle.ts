import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingGrantTitle = (state: StateSchema) => state?.addingGrantFile.data.title;
