import {createAsyncThunk} from "@reduxjs/toolkit";
import {FilterClaimRequest} from "../models/claims/requests";
import {getClaims} from "../services/claims-service";

export const claimGetClaims = createAsyncThunk<any, FilterClaimRequest>(
    "claims/get-claims",
    async (request: FilterClaimRequest) => {
        const data = await getClaims(request);
        return data;
    }
);