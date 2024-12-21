import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingCompetitionFileType = (state: StateSchema) => state?.editingCompetition.data?.file?.type;
