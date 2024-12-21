import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdviserRecord } from "entities/AdviserRecord";
import { AdviserRecordSchema } from "entities/AdviserRecord/model/types/adviserRecord";
import { fetchAdvisers } from "entities/AdviserRecord/model/services/fetchAdvisers";

// Моковые данные
const dataSource: AdviserRecord[] = [];

for (let i = 0; i < 100; i++) {
    const t: AdviserRecord = {
        id: `${Math.random()}`,
        faculty: "Институт экономики и управления АПК",
        department: "Прикладная информатика",
        name: "Наталья",
        surname: "Миронова",
        patronymic: "Олеговна",
        academicDegree: "Доктор наук",
        userId: "test",
    };

    dataSource.push(t);
}

const initialState: AdviserRecordSchema = {
    data: [],
    isLoading: false,
    searchString: "",
    error: undefined,
};

export const adviserRecordSlice = createSlice({
    name: "adviserRecordSlice",
    initialState,
    reducers: {
        setSearchString(state, action: PayloadAction<string>) {
            state.searchString = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdvisers.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchAdvisers.fulfilled, (state, action: PayloadAction<AdviserRecord[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchAdvisers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: adviserRecordsActions } = adviserRecordSlice;
export const { reducer: adviserRecordsReducer } = adviserRecordSlice;
