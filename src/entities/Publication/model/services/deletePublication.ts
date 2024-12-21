import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Publication } from "entities/Publication";

interface DeletePublicationProps {
    userId: string;
    id: string;
}

export const deletePublication = createAsyncThunk<Publication, DeletePublicationProps, ThunkConfig<string>>(
    "publication/deletePublication",
    async (data, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        console.log("data: ", data);

        try {
            const response = await extra.api.post<Publication>("/deletePublication", data);

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
