import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeProfile, EmployeeProfileSchema } from "entities/EmployeeProfile/model/types/employeeProfile";
import { fetchEmployeeProfileData } from "entities/EmployeeProfile/model/services/fetchProfileData";

// [Даниил] Временно, чтобы мне тестить без сервера
const initialState: EmployeeProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

// Моковые данные
// {
//     name: "string",
//         surname: "string",
//     patronymic: "string",
//     email: "awdawd",
//     phoneNumber: "awdawd",
//     position: "awdawdawd",
//     userId: "awdawd",
// }

export const employeeProfileSlice = createSlice({
    name: "employeeProfile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeeProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchEmployeeProfileData.fulfilled, (state, action: PayloadAction<EmployeeProfile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEmployeeProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: employeeProfileActions } = employeeProfileSlice;
export const { reducer: employeeProfileReducer } = employeeProfileSlice;
