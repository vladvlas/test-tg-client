import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Certification, CertificationSchema } from "entities/Certification/model/types/certification";
import { fetchCertifications } from "entities/Certification/model/services/fetchConferences";

const initialState: CertificationSchema = {
    data: [],
    isLoading: false,
    error: undefined,
};

//Моковые данные
// [
//     {
//         id: "00фцв444011adawd21212",
//         semester: "1 семестр",
//         result: true,
//         userId: "awdawd",
//     },
//     {
//         id: "0фцв0444011adawd21212",
//         semester: "2 семестр",
//         result: true,
//         userId: "awdawd",
//     },
//     {
//         id: "00фцв444011adawd21212",
//         semester: "3 семестр",
//         result: true,
//         userId: "awdawd",
//     },
//     {
//         id: "004440фцв11adawd21212",
//         semester: "4 семестр",
//         result: true,
//         userId: "awdawd",
//     },
//
// ]

export const certificationSlice = createSlice({
    name: "certifications",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCertifications.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCertifications.fulfilled, (state, action: PayloadAction<Certification[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCertifications.rejected, (state, action) => {
                state.isLoading = false;
                state.error = String(action.payload);
            });
    },
});

export const { actions: certificationActions } = certificationSlice;
export const { reducer: certificationReducer } = certificationSlice;
