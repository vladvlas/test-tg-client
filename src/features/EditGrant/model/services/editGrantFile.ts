import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { EditingGrantFile } from "features/EditGrant";

export const editGrantFile = createAsyncThunk<EditingGrantFile, EditingGrantFile, ThunkConfig<string>>(
    "edit/editGrant",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        console.log("edit grant request: ", data);

        try {
            const response = await extra.api.post<EditingGrantFile>("/editGrant", data);

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
