import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Grant } from "entities/Grant";

interface DeleteGrantProps {
    userId: string;
    id: string;
}

export const deleteGrant = createAsyncThunk<Grant, DeleteGrantProps, ThunkConfig<string>>(
    "grant/deleteGrant",
    async (data, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        console.log("delete grant request: ", data);

        try {
            const response = await extra.api.post<Grant>("/deleteGrant", data);

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
