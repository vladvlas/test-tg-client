import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingCompetitionFileName = (state: StateSchema) => state?.editingCompetition.data?.file?.name;
