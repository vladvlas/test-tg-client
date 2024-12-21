import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { EditingPublicationFile } from "features/EditPublication/model/types/editingPublicationFile";
import { EditingPatentFile } from "features/EditPatent";

export const editPatentFile = createAsyncThunk<EditingPublicationFile, EditingPatentFile, ThunkConfig<string>>(
    "edit/editPatent",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        console.log("edit patent request: ", data);

        try {
            const response = await extra.api.post<EditingPublicationFile>("/editPatent", data);

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
