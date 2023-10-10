import {createAsyncThunk} from "@reduxjs/toolkit";
import {FilterClaimRequest} from "../models/claims/requests";
import {getClaims} from "../services/claims-service";

export const claimGetClaims = createAsyncThunk(
    "claim/getClaims",
    async (request: FilterClaimRequest) => {
        return await getClaims(request);
    }
);