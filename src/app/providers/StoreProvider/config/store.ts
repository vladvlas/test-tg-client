import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { $api } from "shared/api/api";
import { deviceReducer } from "entities/Device";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        devices: deviceReducer,
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
