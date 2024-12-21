import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    OrderCertificateRecord,
    OrderCertificateRecordSchema,
} from "entities/OrderCertificateRecord/model/types/orderCertificateRecord";
import {
    fetchOrderCertificateRecords,
} from "entities/OrderCertificateRecord/model/services/fetchOrderCertificateRecords";
import { issueCertificate } from "entities/OrderCertificateRecord/model/services/isuueCerticate";

// Моковые данные
const dataSource: OrderCertificateRecord[] = [];

for (let i = 0; i < 100; i++) {
    const t: OrderCertificateRecord = {
        id: `${Math.random()}`,
        userName: "Иван Иванович Касимов",
        number: i,
        applicationDate: "21.03.23",
        spaceRequirement: "По месту требования",
        count: 2,
        needOfficialSeal: true,
        userId: "",
    };

    dataSource.push(t);
}

const initialState: OrderCertificateRecordSchema = {
    data: [],
    isLoading: false,
    error: undefined,
    isIssueLoading: false,
    issueError: undefined,
    success: undefined,
};

export const orderCertificateRecordSlice = createSlice({
    name: "orderCertificateRecord",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrderCertificateRecords.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchOrderCertificateRecords.fulfilled, (state, action: PayloadAction<OrderCertificateRecord[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchOrderCertificateRecords.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            })
            .addCase(issueCertificate.pending, (state) => {
                state.issueError = undefined;
                state.isIssueLoading = true;
            })
            .addCase(issueCertificate.fulfilled, (state, action: PayloadAction<string>) => {
                state.isIssueLoading = false;
                state.success = true;
            })
            .addCase(issueCertificate.rejected, (state, action) => {
                state.isIssueLoading = false;
                state.issueError = String(action.payload);
            });
    },
});

export const { actions: orderCertificateRecordActions } = orderCertificateRecordSlice;
export const { reducer: orderCertificateRecordReducer } = orderCertificateRecordSlice;
