import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { EmployeeProfile } from "entities/EmployeeProfile";

export const fetchEmployeeProfileData = createAsyncThunk<EmployeeProfile, string, ThunkConfig<string>>(
    "employeeProfile/fetchEmployeeProfileData",
    async (userId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<EmployeeProfile>(`/employeeProfile/${userId}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
