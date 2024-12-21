import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Grant } from "entities/Grant";

export const fetchGrants = createAsyncThunk<Grant[], string, ThunkConfig<string>>(
    "grants/fetchGrants",
    async (userId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Grant[]>(`/grants/${userId}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
