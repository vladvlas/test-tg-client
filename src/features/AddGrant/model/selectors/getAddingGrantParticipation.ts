import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingGrantParticipation = (state: StateSchema) => state?.addingGrantFile.data.participation;
