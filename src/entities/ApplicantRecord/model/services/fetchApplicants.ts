import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ApplicantRecord } from "entities/ApplicantRecord";

export const fetchApplicants = createAsyncThunk<ApplicantRecord[], string, ThunkConfig<string>>(
    "applicants/fetchApplicants",
    async (searchString, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            // TODO: посмотреть как можно прокинуть searchString в запрос
            const response = await extra.api.get<ApplicantRecord[]>("/applicants", {
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
