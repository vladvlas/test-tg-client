import { AxiosInstance } from "axios";
import { DevicesSchema } from "entities/Device";

export interface StateSchema {
    devices: DevicesSchema,
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
}
