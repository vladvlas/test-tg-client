import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DevicesSchema } from "entities/Device";

const initialState: DevicesSchema = {
    data: [{
        id: "1",
        name: "Устройство 1",
        tariff: 99,
        status: true,
    }, {
        id: "2",
        name: "Устройство 2",
        tariff: 99,
        status: true,
    }],
    isLoading: false,
    error: undefined,
};

export const deviceSlice = createSlice({
    name: "addingCompetitionFileSlice",
    initialState,
    reducers: {},
});

export const { actions: deviceActions } = deviceSlice;
export const { reducer: deviceReducer } = deviceSlice;