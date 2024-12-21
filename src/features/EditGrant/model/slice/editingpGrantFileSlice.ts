import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditingGrantFileSchema } from "features/EditGrant/model/types/editingGrantFile";
import { editGrantFile } from "features/EditGrant/model/services/editGrantFile";

const initialState: EditingGrantFileSchema = {
    data: {
        id: null,
        title: null,
        participation: null,
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

export const editingGrantFileSlice = createSlice({
    name: "editingGrantFileSlice",
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<string>) => {
            state.data.id = action.payload;
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.data.title = action.payload;
        },
        setParticipation: (state, action: PayloadAction<string>) => {
            state.data.participation = action.payload;
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
            .addCase(editGrantFile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(editGrantFile.fulfilled, (state) => {
                state.isLoading = false;
                state.success = true;
            })
            .addCase(editGrantFile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: editingGrantFileActions } = editingGrantFileSlice;
export const { reducer: editingGrantFileReducer } = editingGrantFileSlice;
