import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Patent } from "entities/Patent";

interface DeletePublicationProps {
    userId: string;
    id: string;
}

export const deletePatent = createAsyncThunk<Patent, DeletePublicationProps, ThunkConfig<string>>(
    "publication/deletePublication",
    async (data, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        console.log("data: ", data);

        try {
            const response = await extra.api.post<Patent>("/deletePatent", data);

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
