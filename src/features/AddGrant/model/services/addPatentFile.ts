import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { AddingGrantFile } from "features/AddGrant";
import { getNewGuid } from "shared/utils/getNewGuid";

export const addGrantFile = createAsyncThunk<AddingGrantFile, AddingGrantFile, ThunkConfig<string>>(
    "add/addGrant",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        console.log("add grant: ", data);

        try {
            const response = await extra.api.post<AddingGrantFile>("/addGrant", { ...data, id: getNewGuid() });

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
