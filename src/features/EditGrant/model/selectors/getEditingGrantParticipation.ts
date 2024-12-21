import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingGrantParticipation = (state: StateSchema) => state?.editingGrantFile.data.participation;
