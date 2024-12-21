import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGrants, Grant, GrantSchema } from "entities/Grant";
import { deleteGrant } from "entities/Grant/model/services/deleteGrant";

const initialState: GrantSchema = {
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
//         id: "001201112321212",
//         title: "Президентский фонд культурных инициатив",
//         participation: "Участник",
//         userId: "",
//     },
//     {
//         id: "0001121221212",
//         title: "Президентский фонд культурных инициатив",
//         participation: "Участник",
//         userId: "",
//     },
//     {
//         id: "00011211221212",
//         title: "Президентский фонд культурных инициатив",
//         participation: "Участник",
//         userId: "",
//     },
//     {
//         id: "00011212311212",
//         title: "Президентский фонд культурных инициатив",
//         participation: "Участник",
//         userId: "",
//     },
//     {
//         id: "000112123121212",
//         title: "Президентский фонд культурных инициатив",
//         participation: "Участник",
//         userId: "",
//     },
//     {
//         id: "0001121212312",
//         title: "Президентский фонд культурных инициатив",
//         participation: "Участник",
//         userId: "",
//     },
// ]

export const grantSlice = createSlice({
    name: "patents",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGrants.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchGrants.fulfilled, (state, action: PayloadAction<Grant[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchGrants.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            })
            .addCase(deleteGrant.pending, (state) => {
                state.deletingError = undefined;
                state.isDeletingLoading = true;
            })
            .addCase(deleteGrant.fulfilled, (state) => {
                state.isDeletingLoading = false;
                state.deletingSuccess = false;
            })
            .addCase(deleteGrant.rejected, (state, action) => {
                state.isDeletingLoading = false;
                state.deletingError = String(action.payload);
            });
    },
});

export const { actions: grantActions } = grantSlice;
export const { reducer: grantReducer } = grantSlice;
