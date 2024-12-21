import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserName";
import { ProfileSchema } from "entities/Profile";
import { AxiosInstance } from "axios";
import { PublicationSchema } from "entities/Publication";

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    publications?: PublicationSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
}
