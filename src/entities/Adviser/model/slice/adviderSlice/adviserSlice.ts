import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Adviser, AdviserSchema } from "entities/Adviser";
import { fetchAdviserProfileData } from "entities/Adviser/model/services/fetchAdviseProfileData/fetchAdviseProfileData";

// [Даниил] Временно, чтобы мне тестить без сервера
const initialState: AdviserSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

//Моковые данные
// {
//     id: "ssss",
//         name: "string",
//     surname: "string",
//     patronymic: "string",
//     birthday: "string",
//     faculty: "string",
//     department: "string",
//     specialtyCode: "string",
//     academicDegree: "string",
//     academicRank: "string",
// }

export const adviserSlice = createSlice({
    name: "adviser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdviserProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchAdviserProfileData.fulfilled, (state, action: PayloadAction<Adviser>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchAdviserProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: adviserActions } = adviserSlice;
export const { reducer: adviserReducer } = adviserSlice;
