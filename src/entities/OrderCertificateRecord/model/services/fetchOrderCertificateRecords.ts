import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { OrderCertificateRecord } from "entities/OrderCertificateRecord/model/types/orderCertificateRecord";

export const fetchOrderCertificateRecords = createAsyncThunk<OrderCertificateRecord[], string, ThunkConfig<string>>(
    "orderCertificateRecords/fetchOrderCertificateRecords",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<OrderCertificateRecord[]>("/orderCertificateRecords/");

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
