import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingCompetitionFileLastModification = (state: StateSchema) => state?.editingCompetition.data?.file?.lastModification;
