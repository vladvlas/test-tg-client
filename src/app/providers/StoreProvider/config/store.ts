import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUserName";
import { $api } from "shared/api/api";
import { profileReducer } from "entities/Profile";
import { publicationsReducer } from "entities/Publication";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer,
        publications: publicationsReducer,
    };

    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
            serializableCheck: false,
        }),
    });
}
