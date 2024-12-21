import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPatents, Patent, PatentSchema } from "entities/Patent";
import { deletePatent } from "entities/Patent/model/services/deletePatent";

const initialState: PatentSchema = {
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
//         title: "СПОСОБ ТОПИЧЕСКОЙ ДИАГНОСТИКИ И ВИЗУАЛИЗАЦИИ АДЕНОМ ОКОЛОЩИТОВИДНЫХ ЖЕЛЕЗ ПРИ ВТОРИЧНОМ И ТРЕТИЧНОМ ГИПЕРПАРАТИРЕОЗЕ",
//         date: "01.04.2021",
//         userId: "",
//     },
//     {
//         id: "00021212",
//         title: "СПОСОБ ТОПИЧЕСКОЙ ДИАГНОСТИКИ И ВИЗУАЛИЗАЦИИ АДЕНОМ ОКОЛОЩИТОВИДНЫХ ЖЕЛЕЗ ПРИ ВТОРИЧНОМ И ТРЕТИЧНОМ ГИПЕРПАРАТИРЕОЗЕ",
//         date: "01.04.2021",
//         userId: "",
//     },
//     {
//         id: "0001122121212",
//         title: "СПОСОБ ТОПИЧЕСКОЙ ДИАГНОСТИКИ И ВИЗУАЛИЗАЦИИ АДЕНОМ ОКОЛОЩИТОВИДНЫХ ЖЕЛЕЗ ПРИ ВТОРИЧНОМ И ТРЕТИЧНОМ ГИПЕРПАРАТИРЕОЗЕ",
//         date: "01.04.2021",
//         userId: "",
//     },
//     {
//         id: "0001133321212",
//         title: "СПОСОБ ТОПИЧЕСКОЙ ДИАГНОСТИКИ И ВИЗУАЛИЗАЦИИ АДЕНОМ ОКОЛОЩИТОВИДНЫХ ЖЕЛЕЗ ПРИ ВТОРИЧНОМ И ТРЕТИЧНОМ ГИПЕРПАРАТИРЕОЗЕ",
//         date: "01.04.2021",
//         userId: "",
//     },
//     {
//         id: "0001111221212",
//         title: "СПОСОБ ТОПИЧЕСКОЙ ДИАГНОСТИКИ И ВИЗУАЛИЗАЦИИ АДЕНОМ ОКОЛОЩИТОВИДНЫХ ЖЕЛЕЗ ПРИ ВТОРИЧНОМ И ТРЕТИЧНОМ ГИПЕРПАРАТИРЕОЗЕ",
//         date: "01.04.2021",
//         userId: "",
//     },
//     {
//         id: "00011232121212",
//         title: "СПОСОБ ТОПИЧЕСКОЙ ДИАГНОСТИКИ И ВИЗУАЛИЗАЦИИ АДЕНОМ ОКОЛОЩИТОВИДНЫХ ЖЕЛЕЗ ПРИ ВТОРИЧНОМ И ТРЕТИЧНОМ ГИПЕРПАРАТИРЕОЗЕ",
//         date: "01.04.2021",
//         userId: "",
//     },
// ]

export const patentsSlice = createSlice({
    name: "patents",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPatents.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPatents.fulfilled, (state, action: PayloadAction<Patent[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPatents.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            })
            .addCase(deletePatent.pending, (state) => {
                state.deletingError = undefined;
                state.isDeletingLoading = true;
            })
            .addCase(deletePatent.fulfilled, (state) => {
                state.isDeletingLoading = false;
                state.deletingSuccess = true;
            })
            .addCase(deletePatent.rejected, (state, action) => {
                state.isDeletingLoading = false;
                state.deletingError = String(action.payload);
            });
    },
});

export const { actions: patentsActions } = patentsSlice;
export const { reducer: patentsReducer } = patentsSlice;
