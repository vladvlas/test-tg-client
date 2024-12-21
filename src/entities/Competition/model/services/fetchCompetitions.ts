import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Competition } from "entities/Competition/model/types/competition";

export const fetchCompetitions = createAsyncThunk<Competition[], string, ThunkConfig<string>>(
    "competitions/fetchCompetitions",
    async (userId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Competition[]>(`/competitions/${userId}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
