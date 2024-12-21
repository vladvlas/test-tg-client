import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Adviser } from "entities/Adviser";

export const fetchAdviserProfileData = createAsyncThunk<Adviser, string, ThunkConfig<string>>(
    "adviserProfile/fetchAdviserProfileData",
    async (userId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Adviser>(`/adviserProfile/${userId}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
