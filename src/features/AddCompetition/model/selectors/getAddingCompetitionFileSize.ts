import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingCompetitionFileSize = (state: StateSchema) => state?.addingCompetition.data?.file?.size;
