import { createSlice } from "@reduxjs/toolkit";
import {ClaimModel} from "../models/claims";
import {claimGetClaims} from "../actions/claims-actions";

interface StateTypes {
    loadingClaims: boolean;
    claims: ClaimModel[];
    selectedClaim?: ClaimModel;
    pageNumber: number;
    totalClaims: number;
}

const initialState: StateTypes = {
    loadingClaims: true,
    claims: [],
    selectedClaim: undefined,
    pageNumber: 1,
    totalClaims: 0
};

export const claimsSlice = createSlice({
    name: "claims",
    initialState: initialState,
    reducers: {
        handleSelectedClaim: (state, { payload }) => {
            state.selectedClaim = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(claimGetClaims.pending, (state) => {
            state.loadingClaims = true;
        });
        builder.addCase(claimGetClaims.fulfilled, (state, { payload }) => {
            (state.claims as any[]) = payload.claims;
            state.totalClaims = payload.total;
            state.loadingClaims = false;
        });
        builder.addCase(claimGetClaims.rejected, (state) => {
            state.loadingClaims = false;
        });
    },
});

export const { handleSelectedClaim } =
    claimsSlice.actions;