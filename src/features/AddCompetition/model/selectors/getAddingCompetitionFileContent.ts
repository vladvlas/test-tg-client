import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingCompetitionFileContent = (state: StateSchema) => state?.addingCompetition.data?.file?.content;
