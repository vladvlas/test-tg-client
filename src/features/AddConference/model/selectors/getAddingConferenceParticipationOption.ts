import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingConferenceParticipationOption = (state: StateSchema) => state?.addingConferenceFile.data.participationOption;
