import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { AddingCompetitionFile } from "features/AddCompetition";
import { getNewGuid } from "shared/utils/getNewGuid";

export const addCompetitionFile = createAsyncThunk<AddingCompetitionFile, AddingCompetitionFile, ThunkConfig<string>>(
    "add/addCompetitionFile",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        console.log("add competition: ", data);

        try {
            const response = await extra.api.post<AddingCompetitionFile>("/addCompetitionFile", { ...data, id: getNewGuid() });

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
