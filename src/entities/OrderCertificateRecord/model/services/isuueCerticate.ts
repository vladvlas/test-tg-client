import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

export const issueCertificate = createAsyncThunk<string, string, ThunkConfig<string>>(
    "certificate/issueCertificate",
    async (id, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        console.log("issue: ", id);

        try {
            const response = await extra.api.post<string>("/issueCertificate", id);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
