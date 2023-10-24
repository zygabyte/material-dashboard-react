import { createSlice } from "@reduxjs/toolkit";
import {ClaimModel} from "../models/claims";
import { claimCreateClaim, claimGetClaims } from "../actions/claims-actions";
import { DEFAULT_PAGE, FAILED, IDLE, LOADING, SUCCEEDED } from "../models/constants/index";
import { IRootState } from "./index";

export interface StateTypes {
    loadingClaims: 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'FAILED';
    loadingCreateClaim: 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'FAILED';
    claims: ClaimModel[];
    selectedClaim?: ClaimModel;
    pageNumber: number;
    totalClaims: number;
}


const initialState: StateTypes = {
    loadingClaims: IDLE,
    loadingCreateClaim: IDLE,
    claims: [],
    selectedClaim: undefined,
    pageNumber: DEFAULT_PAGE,
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
            state.loadingClaims = LOADING;
        });
        builder.addCase(claimGetClaims.fulfilled, (state, { payload }) => {
            state.claims = payload.data;
            state.totalClaims = payload.total;
            state.loadingClaims = SUCCEEDED;
        });
        builder.addCase(claimGetClaims.rejected, (state) => {
            state.loadingClaims = FAILED;
        });

        builder.addCase(claimCreateClaim.pending, (state) => {
            state.loadingCreateClaim = LOADING;
        });
        builder.addCase(claimCreateClaim.fulfilled, (state, { payload }) => {
            state.claims = [payload.data, ...state.claims]
            state.loadingCreateClaim = SUCCEEDED;
        });
        builder.addCase(claimCreateClaim.rejected, (state) => {
            state.loadingCreateClaim = FAILED;
        });
    },
});

export const { handleSelectedClaim } =
    claimsSlice.actions;

export default claimsSlice.reducer;

export const getClaims = (state: IRootState) => state.claimsState.claims;

export const getClaim = (state: IRootState, claimId: string) =>
  state.claimsState.claims.find(claim => claim.claimId == claimId);

export const getPageStatus = (state: IRootState) => state.claimsState.loadingClaims;