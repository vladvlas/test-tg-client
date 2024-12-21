import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingCompetitionFileLastModification = (state: StateSchema) => state?.addingCompetition.data?.file?.lastModification;
