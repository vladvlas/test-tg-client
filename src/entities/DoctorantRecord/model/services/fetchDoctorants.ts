import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { DoctorantRecord } from "entities/DoctorantRecord";

export const fetchDoctorants = createAsyncThunk<DoctorantRecord[], string, ThunkConfig<string>>(
    "orderDoctorantsRecords/fetchOrderDoctorantsRecords",
    async (searchString, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            // TODO: посмотреть как можно прокинуть searchString в запрос
            const response = await extra.api.get<DoctorantRecord[]>("/doctorants/", {
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
