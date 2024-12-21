import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { EntranceTest } from "entities/EntranceTests";

export const fetchEntranceTests = createAsyncThunk<EntranceTest[], string, ThunkConfig<string>>(
    "entranceTests/fetchEntranceTests",
    async (userId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<EntranceTest[]>(`/entranceTests/${userId}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
