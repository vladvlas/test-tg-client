import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conference, ConferenceSchema } from "entities/Conference/model/types/conference";
import { fetchConferences } from "entities/Conference/model/services/fetchConferences";
import { deleteConference } from "entities/Conference/model/services/deleteConference";

const initialState: ConferenceSchema = {
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
//         title: "ВОПРОСЫ ИСПОЛЬЗОВАНИЯ ТЕРМИНОВ АВТОМАТИЗИРОВАННАЯ СИСТЕМА, ИНФОРМАЦИОННАЯ СИСТЕМА И АВТОМАТИЗИРОВАННАЯ ИНФОРМАЦИОННАЯ СИСТЕМА",
//         year: "2021",
//         participationOption: "Участник",
//         level: "Всероссийская",
//         isWin: true,
//     },
//     {
//         id: "0330awdaw01121212",
//         title: "ВОПРОСЫ ИСПОЛЬЗОВАНИЯ ТЕРМИНОВ АВТОМАТИЗИРОВАННАЯ СИСТЕМА, ИНФОРМАЦИОННАЯ СИСТЕМА И АВТОМАТИЗИРОВАННАЯ ИНФОРМАЦИОННАЯ СИСТЕМА",
//         year: "2021",
//         participationOption: "Участник",
//         level: "Всероссийская",
//         isWin: true,
//     },
//     {
//         id: "0022011awdaw21212",
//         title: "ВОПРОСЫ ИСПОЛЬЗОВАНИЯ ТЕРМИНОВ АВТОМАТИЗИРОВАННАЯ СИСТЕМА, ИНФОРМАЦИОННАЯ СИСТЕМА И АВТОМАТИЗИРОВАННАЯ ИНФОРМАЦИОННАЯ СИСТЕМА",
//         year: "2021",
//         participationOption: "Участник",
//         level: "Всероссийская",
//         isWin: true,
//     },
//     {
//         id: "011001awdaw121212",
//         title: "ВОПРОСЫ ИСПОЛЬЗОВАНИЯ ТЕРМИНОВ АВТОМАТИЗИРОВАННАЯ СИСТЕМА, ИНФОРМАЦИОННАЯ СИСТЕМА И АВТОМАТИЗИРОВАННАЯ ИНФОРМАЦИОННАЯ СИСТЕМА",
//         year: "2021",
//         participationOption: "Участник",
//         level: "Всероссийская",
//         isWin: true,
//     },
//     {
//         id: "000awdaw11awdaw21212",
//         title: "ВОПРОСЫ ИСПОЛЬЗОВАНИЯ ТЕРМИНОВ АВТОМАТИЗИРОВАННАЯ СИСТЕМА, ИНФОРМАЦИОННАЯ СИСТЕМА И АВТОМАТИЗИРОВАННАЯ ИНФОРМАЦИОННАЯ СИСТЕМА",
//         year: "2021",
//         participationOption: "Участник",
//         level: "Всероссийская",
//         isWin: true,
//     },
//
// ]

export const conferencesSlice = createSlice({
    name: "conferences",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchConferences.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchConferences.fulfilled, (state, action: PayloadAction<Conference[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchConferences.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            })
            .addCase(deleteConference.pending, (state) => {
                state.deletingError = undefined;
                state.isDeletingLoading = true;
            })
            .addCase(deleteConference.fulfilled, (state) => {
                state.isDeletingLoading = false;
                state.deletingSuccess = true;
            })
            .addCase(deleteConference.rejected, (state, action) => {
                state.isDeletingLoading = false;
                state.deletingError = String(action.payload);
            });
    },
});

export const { actions: conferencesActions } = conferencesSlice;
export const { reducer: conferencesReducer } = conferencesSlice;
