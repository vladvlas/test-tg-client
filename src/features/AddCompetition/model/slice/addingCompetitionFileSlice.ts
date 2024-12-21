import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddingCompetitionFileSchema } from "features/AddCompetition/model/types/addingCompetitionFile";
import { addCompetitionFile } from "features/AddCompetition";

const initialState: AddingCompetitionFileSchema = {
    data: {
        id: null,
        title: null,
        year: null,
        result: null,
        userId: null,
        file: {
            name: null,
            type: null,
            content: null,
            size: null,
            lastModification: null,
        },
    },
    isLoading: false,
    error: undefined,
    success: undefined,
};

export const addingCompetitionFileSlice = createSlice({
    name: "addingCompetitionFileSlice",
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<string>) => {
            state.data.id = action.payload;
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.data.title = action.payload;
        },
        setYear: (state, action: PayloadAction<string>) => {
            state.data.year = action.payload;
        },
        setResult: (state, action: PayloadAction<string>) => {
            state.data.result = action.payload;
        },
        setFileContent: (state, action: PayloadAction<number[]>) => {
            state.data.file.content = action.payload;
        },
        setFileName: (state, action: PayloadAction<string>) => {
            state.data.file.name = action.payload;
        },
        setLastModification: (state, action: PayloadAction<Date>) => {
            state.data.file.lastModification = action.payload;
        },
        setFileSize: (state, action: PayloadAction<number>) => {
            state.data.file.size = action.payload;
        },
        setFileType: (state, action: PayloadAction<string>) => {
            state.data.file.type = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addCompetitionFile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(addCompetitionFile.fulfilled, (state) => {
                state.isLoading = false;
                state.success = true;
            })
            .addCase(addCompetitionFile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: addingCompetitionFileActions } = addingCompetitionFileSlice;
export const { reducer: addingCompetitionFileReducer } = addingCompetitionFileSlice;
