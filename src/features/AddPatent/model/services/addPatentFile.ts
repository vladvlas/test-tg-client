import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { AddingPublicationFile } from "features/AddPublication/model/types/addingPublicationFile";
import { AddingPatentFile } from "features/AddPatent/model/types/addingPatentFile";
import { getNewGuid } from "shared/utils/getNewGuid";

export const addPatentFile = createAsyncThunk<AddingPublicationFile, AddingPatentFile, ThunkConfig<string>>(
    "add/addPatent",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        console.log("add patent: ", data);

        try {
            const response = await extra.api.post<AddingPublicationFile>("/addPatent", { ...data, id: getNewGuid() });

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
