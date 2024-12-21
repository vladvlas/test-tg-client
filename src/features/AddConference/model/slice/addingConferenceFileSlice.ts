import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddingConferenceFileSchema } from "features/AddConference/model/types/addingConferenceFile";
import { addConferenceFile } from "features/AddConference/model/services/addConferenceFile";

const initialState: AddingConferenceFileSchema = {
    data: {
        id: null,
        title: null,
        year: null,
        participationOption: null,
        level: "",
        isWin: false,
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

export const addingConferenceFileSlice = createSlice({
    name: "addingConferenceFileSlice",
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
        setLevel: (state, action: PayloadAction<string>) => {
            state.data.level = action.payload;
        },
        setParticipationOption: (state, action: PayloadAction<string>) => {
            state.data.participationOption = action.payload;
        },
        setIsWin: (state, action: PayloadAction<boolean>) => {
            state.data.isWin = action.payload;
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
            .addCase(addConferenceFile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(addConferenceFile.fulfilled, (state) => {
                state.isLoading = false;
                state.success = true;
            })
            .addCase(addConferenceFile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: addingConferenceFileActions } = addingConferenceFileSlice;
export const { reducer: addingConferenceFileReducer } = addingConferenceFileSlice;
