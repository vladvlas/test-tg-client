import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditingPublicationFileSchema } from "features/EditPublication";
import { editPublicationFile } from "features/EditPublication/model/services/editPublicationFile";

const initialState: EditingPublicationFileSchema = {
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

export const editingPublicationFileSlice = createSlice({
    name: "editingPublicationFileSlice",
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
            .addCase(editPublicationFile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(editPublicationFile.fulfilled, (state) => {
                state.isLoading = false;
                state.success = true;
            })
            .addCase(editPublicationFile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: editingPublicationFileActions } = editingPublicationFileSlice;
export const { reducer: editingPublicationFileReducer } = editingPublicationFileSlice;
