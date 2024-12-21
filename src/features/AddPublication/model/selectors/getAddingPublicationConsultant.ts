import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getAddingPublicationConsultant = (state: StateSchema) => state?.addingPublicationFile.data.consultant;
