import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { AspirantRecord } from "entities/AspirantRecord/model/types/aspirantRecord";

export const fetchAspirants = createAsyncThunk<AspirantRecord[], string, ThunkConfig<string>>(
    "aspirants/fetchAspirants",
    async (searchString, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            // TODO: посмотреть как можно прокинуть searchString в запрос
            const response = await extra.api.get<AspirantRecord[]>("/aspirants/", {
                params: {
                    search: searchString,
                },
            });

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
