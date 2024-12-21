import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Conference } from "entities/Conference";

interface DeleteConferenceProps {
    userId: string;
    id: string;
}

export const deleteConference = createAsyncThunk<Conference, DeleteConferenceProps, ThunkConfig<string>>(
    "conference/deleteConference",
    async (data, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        console.log("delete conference: ", data);

        try {
            const response = await extra.api.post<Conference>("/deleteConference", data);

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
