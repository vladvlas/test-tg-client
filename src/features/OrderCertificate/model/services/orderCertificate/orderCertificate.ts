import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { batch } from "react-redux";
import { OrderingCertificate, orderingCertificateActions } from "features/OrderCertificate";

interface OrderCertificateProps extends OrderingCertificate {
    userId: string;
}

export const orderCertificate = createAsyncThunk<OrderingCertificate, OrderCertificateProps, ThunkConfig<string>>(
    "order/orderCertificate",
    async (data, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<OrderingCertificate>("/orderCertificate", data);

            if (!response.data) {
                throw new Error();
            }

            batch(() => {
                dispatch(orderingCertificateActions.setSpaceRequirement(""));
                dispatch(orderingCertificateActions.setCount(1));
                dispatch(orderingCertificateActions.setOfficialSeal(false));
            });

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    },
);
