import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { DissertationFile } from "entities/DissertationFile/model/types/dissertationFile";

export const fetchDissertation = createAsyncThunk<DissertationFile, string, ThunkConfig<string>>(
    "dissertation/fetchDissertation",
    async (userId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<DissertationFile>(`/dissertation/${userId}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
