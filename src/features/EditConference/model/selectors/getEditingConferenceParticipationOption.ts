import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getEditingConferenceParticipationOption = (state: StateSchema) => state?.editingConferenceFile.data.participationOption;
