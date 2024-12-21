import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfileData, Profile, ProfileSchema } from "entities/Profile";

// [Даниил] Временно, чтобы мне тестить без сервера
const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

//Моковые данные
// {
//     userId: "awdaw",
//         name: "string",
//     surname: "string",
//     patronymic: "string",
//     birthday: "string",
//     faculty: "string",
//     department: "string",
//     direction: "string",
//     groupNumber: "string",
//     educationType: "string",
//     educationForm: "string",
//     isBudget: true,
//     class: "string",
// }

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined,
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
