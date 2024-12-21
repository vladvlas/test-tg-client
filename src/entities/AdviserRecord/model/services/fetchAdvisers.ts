import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { AdviserRecord } from "entities/AdviserRecord";

export const fetchAdvisers = createAsyncThunk<AdviserRecord[], string, ThunkConfig<string>>(
    "advisers/fetchAdvisers",
    async (searchString, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            // TODO: посмотреть как можно прокинуть searchString в запрос
            const response = await extra.api.get<AdviserRecord[]>("/advisers", {
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
