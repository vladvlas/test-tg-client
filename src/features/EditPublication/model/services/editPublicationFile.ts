import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { EditingPublicationFile } from "features/EditPublication/model/types/editingPublicationFile";


export const editPublicationFile = createAsyncThunk<EditingPublicationFile, EditingPublicationFile, ThunkConfig<string>>(
    "edit/editPublication",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        console.log("edit publication: ", data);

        try {
            const response = await extra.api.post<EditingPublicationFile>("/editPublication", data);

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
