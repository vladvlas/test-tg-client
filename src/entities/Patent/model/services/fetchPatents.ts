import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Patent } from "entities/Patent";

export const fetchPatents = createAsyncThunk<Patent[], string, ThunkConfig<string>>(
    "publications/fetchPublications",
    async (userId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Patent[]>(`/patents/${userId}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
