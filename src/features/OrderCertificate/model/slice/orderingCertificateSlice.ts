import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderingCertificateSchema } from "features/OrderCertificate/model/types/sertificate";
import { orderCertificate } from "features/OrderCertificate/model/services/orderCertificate/orderCertificate";

const initialState: OrderingCertificateSchema = {
    data: {
        spaceRequirement: "",
        needOfficialSeal: false,
        count: 1,
    },
    isLoading: false,
    error: undefined,
    success: undefined,
};

export const orderingCertificateSlice = createSlice({
    name: "orderingCertificate",
    initialState,
    reducers: {
        setSpaceRequirement: (state, action: PayloadAction<string>) => {
            state.data.spaceRequirement = action.payload;
        },
        setCount: (state, action: PayloadAction<number>) => {
            state.data.count = action.payload;
        },
        setOfficialSeal: (state, action: PayloadAction<boolean>) => {
            state.data.needOfficialSeal = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(orderCertificate.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(orderCertificate.fulfilled, (state, action) => {
                state.isLoading = false;
                state.success = true;
            })
            .addCase(orderCertificate.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: orderingCertificateActions } = orderingCertificateSlice;
export const { reducer: orderingCertificateReducer } = orderingCertificateSlice;
