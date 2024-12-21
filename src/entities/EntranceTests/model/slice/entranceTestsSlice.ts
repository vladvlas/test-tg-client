import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EntranceTest, EntranceTestSchema } from "entities/EntranceTests";
import { fetchEntranceTests } from "entities/EntranceTests/model/services/fetchEntranceTests/fetchEntranceTests";

const initialState: EntranceTestSchema = {
    data: [],
    isLoading: false,
    error: undefined,
};

// Моковые данные
// [
//     {
//         title: "Философия",
//         grade: "4",
//         userId: "",
//     },
//     {
//         title: "Английский язык",
//         grade: "5",
//         userId: "",
//     },
//     {
//         title: "Специальность",
//         grade: "5",
//         userId: "",
//     },
// ]

export const entranceTestsSlice = createSlice({
    name: "entranceTests",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEntranceTests.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEntranceTests.fulfilled, (state, action: PayloadAction<EntranceTest[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEntranceTests.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: entranceTestsActions } = entranceTestsSlice;
export const { reducer: entranceTestsReducer } = entranceTestsSlice;
