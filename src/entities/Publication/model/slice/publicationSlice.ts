import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Publication, PublicationSchema } from "entities/Publication/model/types/publication";
import { fetchPublications } from "entities/Publication/model/services/fetchPublications";
import { deletePublication } from "entities/Publication/model/services/deletePublication";

const initialState: PublicationSchema = {
    data: [],
    isLoading: false,
    error: undefined,
    isDeletingLoading: false,
    deletingError: undefined,
    deletingSuccess: undefined,
};

//Моковые данные
// [
//     {
//         id: "0001121212",
//         title: "ВОПРОСЫ ИСПОЛЬЗОВАНИЯ ТЕРМИНОВ АВТОМАТИЗИРОВАННАЯ СИСТЕМА, ИНФОРМАЦИОННАЯ СИСТЕМА И АВТОМАТИЗИРОВАННАЯ ИНФОРМАЦИОННАЯ СИСТЕМА",
//         year: "2021",
//         publicationType: "Российская",
//         edition: "Южно-Уральский государственный аграрный университет",
//         consultant: "Крылов Александр Михайлович",
//         userId: "awdawd",
//     },
//     {
//         id: "00011212",
//         title: "ВОПРОСЫ ИСПОЛЬЗОВАНИЯ ТЕРМИНОВ АВТОМАТИЗИРОВАННАЯ СИСТЕМА, ИНФОРМАЦИОННАЯ СИСТЕМА И АВТОМАТИЗИРОВАННАЯ ИНФОРМАЦИОННАЯ СИСТЕМА",
//         year: "2021",
//         publicationType: "Российская",
//         edition: "Южно-Уральский государственный аграрный университет",
//         consultant: "Крылов Александр Михайлович",
//         userId: "awdawd",
//     },
//     {
//         id: "0001212",
//         title: "ВОПРОСЫ ИСПОЛЬЗОВАНИЯ ТЕРМИНОВ АВТОМАТИЗИРОВАННАЯ СИСТЕМА, ИНФОРМАЦИОННАЯ СИСТЕМА И АВТОМАТИЗИРОВАННАЯ ИНФОРМАЦИОННАЯ СИСТЕМА",
//         year: "2021",
//         publicationType: "Российская",
//         edition: "Южно-Уральский государственный аграрный университет",
//         consultant: "Крылов Александр Михайлович",
//         userId: "awdawd",
//     },
//     {
//         id: "00011awd21212",
//         title: "ВОПРОСЫ ИСПОЛЬЗОВАНИЯ ТЕРМИНОВ АВТОМАТИЗИРОВАННАЯ СИСТЕМА, ИНФОРМАЦИОННАЯ СИСТЕМА И АВТОМАТИЗИРОВАННАЯ ИНФОРМАЦИОННАЯ СИСТЕМА",
//         year: "2021",
//         publicationType: "Российская",
//         edition: "Южно-Уральский государственный аграрный университет",
//         consultant: "Крылов Александр Михайлович",
//         userId: "awdawd",
//     },
//     {
//         id: "0001rrr121212",
//         title: "ВОПРОСЫ ИСПОЛЬЗОВАНИЯ ТЕРМИНОВ АВТОМАТИЗИРОВАННАЯ СИСТЕМА, ИНФОРМАЦИОННАЯ СИСТЕМА И АВТОМАТИЗИРОВАННАЯ ИНФОРМАЦИОННАЯ СИСТЕМА",
//         year: "2021",
//         publicationType: "Российская",
//         edition: "Южно-Уральский государственный аграрный университет",
//         consultant: "Крылов Александр Михайлович",
//         userId: "awdawd",
//     },
//     {
//         id: "00011awawdwd21212",
//         title: "ВОПРОСЫ ИСПОЛЬЗОВАНИЯ ТЕРМИНОВ АВТОМАТИЗИРОВАННАЯ СИСТЕМА, ИНФОРМАЦИОННАЯ СИСТЕМА И АВТОМАТИЗИРОВАННАЯ ИНФОРМАЦИОННАЯ СИСТЕМА",
//         year: "2021",
//         publicationType: "Российская",
//         edition: "Южно-Уральский государственный аграрный университет",
//         consultant: "Крылов Александр Михайлович",
//         userId: "awdawd",
//     },
// ]

export const publicationsSlice = createSlice({
    name: "publications",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPublications.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPublications.fulfilled, (state, action: PayloadAction<Publication[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPublications.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            })
            .addCase(deletePublication.pending, (state) => {
                state.deletingError = undefined;
                state.isDeletingLoading = true;
            })
            .addCase(deletePublication.fulfilled, (state) => {
                state.isDeletingLoading = false;
                state.deletingSuccess = true;
            })
            .addCase(deletePublication.rejected, (state, action) => {
                state.isDeletingLoading = false;
                state.deletingError = String(action.payload);
            });
    },
});

export const { actions: publicationsActions } = publicationsSlice;
export const { reducer: publicationsReducer } = publicationsSlice;
