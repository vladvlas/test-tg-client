import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { EditingConferenceFile } from "features/EditConference";


export const editConferenceFile = createAsyncThunk<EditingConferenceFile, EditingConferenceFile, ThunkConfig<string>>(
    "edit/editConference",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        console.log("edit conference file: ", data);

        try {
            const response = await extra.api.post<EditingConferenceFile>("/editConference", data);

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
