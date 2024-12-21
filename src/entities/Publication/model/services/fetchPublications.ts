import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Publication } from "entities/Publication/model/types/publication";

export const fetchPublications = createAsyncThunk<Publication[], string, ThunkConfig<string>>(
    "publications/fetchPublications",
    async (userId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Publication[]>(`/publications/${userId}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
