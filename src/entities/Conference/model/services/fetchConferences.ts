import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Conference } from "entities/Conference";

export const fetchConferences = createAsyncThunk<Conference[], string, ThunkConfig<string>>(
    "conferences/fetchConferences",
    async (userId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Conference[]>(`/conferences/${userId}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
