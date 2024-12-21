import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Competition, CompetitionSchema } from "entities/Competition/model/types/competition";
import { fetchCompetitions } from "entities/Competition/model/services/fetchCompetitions";
import { deleteCompetition } from "entities/Competition/model/services/deleteConference";

const initialState: CompetitionSchema = {
    data: [],
    isLoading: false,
    error: undefined,
    isDeletingLoading: false,
    deletingError: undefined,
    deletingSuccess: undefined,
};

// Моковые данные
// [
//     {
//         id: "00444011adawd21212",
//         title: "Стипендия Правительства Российской Федерации",
//         year: "2021",
//         result: "Отказ",
//         userId: "awdawd",
//     },
//     {
//         id: "00awdawdadawd21212",
//         title: "Стипендия Правительства Российской Федерации",
//         year: "2021",
//         result: "Отказ",
//         userId: "awdawd",
//     },
//     {
//         id: "00awdawdawd011adawd21212",
//         title: "Стипендия Правительства Российской Федерации",
//         year: "2021",
//         result: "Отказ",
//         userId: "awdawd",
//     },
//     {
//         id: "004440rrr11adawd21212",
//         title: "Стипендия Правительства Российской Федерации",
//         year: "2021",
//         result: "Отказ",
//         userId: "awdawd",
//     },
//     {
//         id: "0044qq4011adawd21212",
//         title: "Стипендия Правительства Российской Федерации",
//         year: "2021",
//         result: "Отказ",
//         userId: "awdawd",
//     },
//
// ]

export const competitionsSlice = createSlice({
    name: "competitions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCompetitions.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCompetitions.fulfilled, (state, action: PayloadAction<Competition[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCompetitions.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            })
            .addCase(deleteCompetition.pending, (state) => {
                state.deletingError = undefined;
                state.isDeletingLoading = true;
            })
            .addCase(deleteCompetition.fulfilled, (state) => {
                state.isDeletingLoading = false;
                state.deletingSuccess = true;
            })
            .addCase(deleteCompetition.rejected, (state, action) => {
                state.isDeletingLoading = false;
                state.deletingError = String(action.payload);
            });
    },
});

export const { actions: competitionsActions } = competitionsSlice;
export const { reducer: competitionsReducer } = competitionsSlice;
