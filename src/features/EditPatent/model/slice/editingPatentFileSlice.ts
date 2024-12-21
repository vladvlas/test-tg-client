import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditingPatentFileSchema } from "features/EditPatent/model/types/editingPatentFile";
import { editPatentFile } from "features/EditPatent/model/services/editPatentFile";

const initialState: EditingPatentFileSchema = {
    data: {
        id: null,
        title: null,
        date: null,
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
};

export const editingPatentFileSlice = createSlice({
    name: "editingPatentFileSlice",
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<string>) => {
            state.data.id = action.payload;
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.data.title = action.payload;
        },
        setDate: (state, action: PayloadAction<string>) => {
            state.data.date = action.payload;
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
            .addCase(editPatentFile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(editPatentFile.fulfilled, (state) => {
                state.isLoading = false;
                state.success = true;
            })
            .addCase(editPatentFile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: editingPatentFileActions } = editingPatentFileSlice;
export const { reducer: editingPatentFileReducer } = editingPatentFileSlice;
