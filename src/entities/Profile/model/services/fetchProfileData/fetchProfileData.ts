import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "entities/Profile";

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (userId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>(`/profile/${userId}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
