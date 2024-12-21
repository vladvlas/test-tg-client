import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingCompetitionFileType = (state: StateSchema) => state?.addingCompetition.data?.file?.type;
