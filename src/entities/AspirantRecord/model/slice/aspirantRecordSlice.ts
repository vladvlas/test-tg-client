import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AspirantRecord, AspirantRecordSchema } from "entities/AspirantRecord/model/types/aspirantRecord";
import { fetchAspirants } from "entities/AspirantRecord/model/services/fetchAspirants";

const dataSource: AspirantRecord[] = [];

for (let i = 0; i < 100; i++) {
    const t: AspirantRecord = {
        id: `${Math.random()}`,
        class: "2",
        faculty: "Институт экономики и управления АПК",
        department: "Прикладная информатика",
        name: Math.random() > 0.3 ? "Иван" : "Михаил",
        surname: "Иванов",
        patronymic: "Иванович",
        groupNumber: "ДЭ-332",
        userId: "test",
    };

    dataSource.push(t);
}

const initialState: AspirantRecordSchema = {
    data: [],
    isLoading: false,
    searchString: "",
    error: undefined,
};

export const aspirantRecordSlice = createSlice({
    name: "aspirantRecordSlice",
    initialState,
    reducers: {
        setSearchString(state, action: PayloadAction<string>) {
            state.searchString = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAspirants.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchAspirants.fulfilled, (state, action: PayloadAction<AspirantRecord[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchAspirants.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: aspirantRecordsActions } = aspirantRecordSlice;
export const { reducer: aspirantRecordsReducer } = aspirantRecordSlice;
