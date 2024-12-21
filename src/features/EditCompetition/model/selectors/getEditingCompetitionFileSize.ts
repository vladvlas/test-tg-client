import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingCompetitionFileSize = (state: StateSchema) => state?.editingCompetition.data?.file?.size;
