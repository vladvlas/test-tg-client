import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { AddingConferenceFile } from "features/AddConference";
import {getNewGuid} from "shared/utils/getNewGuid";


export const addConferenceFile = createAsyncThunk<AddingConferenceFile, AddingConferenceFile, ThunkConfig<string>>(
    "add/addConference",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        console.log("add conference: ", data);

        try {
            const response = await extra.api.post<AddingConferenceFile>("/addConference", { ...data, id: getNewGuid() });

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
