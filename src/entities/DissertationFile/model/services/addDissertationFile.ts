import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { DissertationFile } from "entities/DissertationFile";
import { FileWithContent } from "shared/types/FileWithContent";

interface Props extends FileWithContent {
    id: string;
    userId: string;
}

export const addDissertationFile = createAsyncThunk<DissertationFile, Props, ThunkConfig<string>>(
    "add/addDissertation",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        console.log("add dissertation: ", data);

        try {
            const response = await extra.api.post("/addDissertation", data);

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
