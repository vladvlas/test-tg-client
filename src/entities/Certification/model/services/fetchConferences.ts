import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {Certification} from "entities/Certification";

export const fetchCertifications = createAsyncThunk<Certification[], string, ThunkConfig<string>>(
    "certifications/fetchCertifications",
    async (userId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Certification[]>(`/certifications/${userId}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
