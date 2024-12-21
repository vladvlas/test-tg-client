import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditingCompetitionFileSchema } from "features/EditCompetition";
import { editCompetitionFile } from "features/EditCompetition/model/services/editConferenceFile";

const initialState: EditingCompetitionFileSchema = {
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
    success: undefined,
    error: undefined,
};

export const editingCompetitionFileSlice = createSlice({
    name: "editingCompetitionFileSlice",
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
            .addCase(editCompetitionFile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(editCompetitionFile.fulfilled, (state) => {
                state.isLoading = false;
                state.success = true;
            })
            .addCase(editCompetitionFile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: editingCompetitionFileActions } = editingCompetitionFileSlice;
export const { reducer: editingCompetitionFileReducer } = editingCompetitionFileSlice;
