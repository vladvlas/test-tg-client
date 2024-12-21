import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddingPatentFileSchema } from "features/AddPatent/model/types/addingPatentFile";
import { addPatentFile } from "features/AddPatent/model/services/addPatentFile";

const initialState: AddingPatentFileSchema = {
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
    error: undefined,
    success: undefined,
};

export const addingPatentFileSlice = createSlice({
    name: "addingPatentFileSlice",
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
            .addCase(addPatentFile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(addPatentFile.fulfilled, (state) => {
                state.isLoading = false;
                state.success = true;
            })
            .addCase(addPatentFile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: addingPatentFileActions } = addingPatentFileSlice;
export const { reducer: addingPatentFileReducer } = addingPatentFileSlice;
