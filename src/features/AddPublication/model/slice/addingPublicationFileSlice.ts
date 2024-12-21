import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddingPublicationFileSchema } from "features/AddPublication";
import { addPublicationFile } from "features/AddPublication/model/services/addPublicationFile";

const initialState: AddingPublicationFileSchema = {
    data: {
        id: null,
        title: null,
        year: null,
        publicationType: null,
        edition: null,
        consultant: null,
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

export const addingPublicationFileSlice = createSlice({
    name: "addingPublicationFileSlice",
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.data.title = action.payload;
        },
        setYear: (state, action: PayloadAction<string>) => {
            state.data.year = action.payload;
        },
        setPublicationType: (state, action: PayloadAction<string>) => {
            state.data.publicationType = action.payload;
        },
        setEdition: (state, action: PayloadAction<string>) => {
            state.data.edition = action.payload;
        },
        setConsultant: (state, action: PayloadAction<string>) => {
            state.data.consultant = action.payload;
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
            .addCase(addPublicationFile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(addPublicationFile.fulfilled, (state) => {
                state.isLoading = false;
                state.success = true;
            })
            .addCase(addPublicationFile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: addingPublicationFileActions } = addingPublicationFileSlice;
export const { reducer: addingPublicationFileReducer } = addingPublicationFileSlice;
