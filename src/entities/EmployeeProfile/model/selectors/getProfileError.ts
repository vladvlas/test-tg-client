import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getProfileError = (state: StateSchema) => state.employeeProfile?.error;
