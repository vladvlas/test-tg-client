import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Competition } from "entities/Competition/model/types/competition";

interface DeleteCompetitionProps {
    userId: string;
    id: string;
}

export const deleteCompetition = createAsyncThunk<Competition, DeleteCompetitionProps, ThunkConfig<string>>(
    "competition/deleteCompetition",
    async (data, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        console.log("delete conference: ", data);

        try {
            const response = await extra.api.post<Competition>("/deleteCompetition", data);

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
