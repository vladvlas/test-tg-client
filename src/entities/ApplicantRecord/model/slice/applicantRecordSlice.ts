import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicantRecord } from "entities/ApplicantRecord";
import { ApplicantRecordSchema } from "entities/ApplicantRecord/model/types/applicantRecord";
import { fetchApplicants } from "entities/ApplicantRecord/model/services/fetchApplicants";

// Моковые данные
const dataSource: ApplicantRecord[] = [];

for (let i = 0; i < 100; i++) {
    const t: ApplicantRecord = {
        id: `${Math.random()}`,
        faculty: "Институт экономики и управления АПК",
        department: "Прикладная информатика",
        name: "Михаил",
        surname: "Косухин",
        patronymic: "Александрович",
        userId: "test",
    };

    dataSource.push(t);
}

const initialState: ApplicantRecordSchema = {
    data: [],
    isLoading: false,
    searchString: "",
    error: undefined,
};

export const applicantRecordSlice = createSlice({
    name: "applicantRecordSlice",
    initialState,
    reducers: {
        setSearchString(state, action: PayloadAction<string>) {
            state.searchString = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchApplicants.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchApplicants.fulfilled, (state, action: PayloadAction<ApplicantRecord[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchApplicants.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: applicantRecordsActions } = applicantRecordSlice;
export const { reducer: applicantRecordsReducer } = applicantRecordSlice;
