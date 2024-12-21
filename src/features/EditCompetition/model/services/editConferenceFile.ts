import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { EditingCompetitionFile } from "features/EditCompetition";

export const editCompetitionFile = createAsyncThunk<EditingCompetitionFile, EditingCompetitionFile, ThunkConfig<string>>(
    "edit/editCompetition",
    async (data, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        console.log("edit competition file: ", data);

        try {
            const response = await extra.api.post<EditingCompetitionFile>("/editCompetition", data);

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
