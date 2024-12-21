import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DoctorantRecord } from "entities/DoctorantRecord";
import { DoctorantRecordSchema } from "entities/DoctorantRecord/model/types/doctorantRecord";
import { fetchDoctorants } from "entities/DoctorantRecord/model/services/fetchDoctorants";

// Моковые данные
const dataSource: DoctorantRecord[] = [];

for (let i = 0; i < 100; i++) {
    const t: DoctorantRecord = {
        id: `${Math.random()}`,
        faculty: "Институт экономики и управления АПК",
        department: "Прикладная информатика",
        name: "Максим",
        surname: "Косухин",
        patronymic: "Александрович",
        userId: "awd",
    };

    dataSource.push(t);
}

const initialState: DoctorantRecordSchema = {
    data: [],
    isLoading: false,
    searchString: "",
    error: undefined,
};

export const doctorantRecordSlice = createSlice({
    name: "aspirantRecordSlice",
    initialState,
    reducers: {
        setSearchString(state, action: PayloadAction<string>) {
            state.searchString = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDoctorants.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchDoctorants.fulfilled, (state, action: PayloadAction<DoctorantRecord[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchDoctorants.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: doctorantRecordsActions } = doctorantRecordSlice;
export const { reducer: doctorantRecordsReducer } = doctorantRecordSlice;
