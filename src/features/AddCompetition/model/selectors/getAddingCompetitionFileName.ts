import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingCompetitionFileName = (state: StateSchema) => state?.addingCompetition.data?.file?.name;
