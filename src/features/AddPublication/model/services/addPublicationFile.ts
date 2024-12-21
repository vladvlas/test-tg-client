import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { AddingPublicationFile } from "features/AddPublication/model/types/addingPublicationFile";
import { getNewGuid } from "shared/utils/getNewGuid";

export const addPublicationFile = createAsyncThunk<AddingPublicationFile, AddingPublicationFile, ThunkConfig<string>>(
    "add/addPublication",
    async (data, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<AddingPublicationFile>("/addPublication", { ...data, id: getNewGuid() });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("Ошибка при отправке запроса");
        }
    },
);
