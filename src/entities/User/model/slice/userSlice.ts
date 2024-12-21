import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { UserRole } from "shared/enums/userRole";
import { User, UserSchema } from "../types/user";

// [Даниил] Временно, чтобы не логиниться разработку, а так он должен быть пустым
const initialState: UserSchema = {
    authData: undefined,
};

// Моковые данные
// authData: {
//     id: "awdaw",
//         username: "awdawd",
//         userRole: UserRole.EMPLOYEE,
//         token: "wdawd",
// },

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthDara: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            state.authData = {
                id: "awdaw",
                username: "awdawd",
                userRole: UserRole.STUDENT,
                token: "wdawd",
            }

            // const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            //
            // if (user) {
            //     state.authData = JSON.parse(user);
            // }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
