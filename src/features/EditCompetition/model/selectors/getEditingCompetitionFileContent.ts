import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingCompetitionFileContent = (state: StateSchema) => state?.editingCompetition.data?.file?.content;
