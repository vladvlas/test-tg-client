import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    DissertationFile,
    DissertationFileSchema,
    DissertationStatus,
} from "entities/DissertationFile/model/types/dissertationFile";
import { fetchDissertation } from "entities/DissertationFile/model/services/fetchDissertation";
import { addDissertationFile } from "entities/DissertationFile/model/services/addDissertationFile";

const initialState: DissertationFileSchema = {
    data: undefined,
    isLoading: false,
    isAddLoading: false,
    error: undefined,
    addError: undefined,
    success: undefined,
};

// Моковые данные
// {
//     id: "",
//         defenseDate: "12.07.24",
//     isAdmitted: true,
//     status: DissertationStatus.VIEWED,
//     userId: "qeawdawd",s
//     file: {
//         name: "123123213",
//             type: "121231",
//             size: null,
//             lastModification: null,
//             content: null,
//     },
// }

export const dissertationFileSlice = createSlice({
    name: "dissertationFile",
    initialState,
    reducers: {
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
            .addCase(fetchDissertation.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchDissertation.fulfilled, (state, action: PayloadAction<DissertationFile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchDissertation.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            })
            .addCase(addDissertationFile.pending, (state) => {
                state.addError = undefined;
                state.isAddLoading = true;
            })
            .addCase(addDissertationFile.fulfilled, (state, action: PayloadAction<DissertationFile>) => {
                state.isAddLoading = false;
                state.data = action.payload;
            })
            .addCase(addDissertationFile.rejected, (state, action) => {
                state.isAddLoading = false;
                state.addError = String(action.payload);
            });
    },
});

export const { actions: dissertationFileActions } = dissertationFileSlice;
export const { reducer: dissertationFileReducer } = dissertationFileSlice;
