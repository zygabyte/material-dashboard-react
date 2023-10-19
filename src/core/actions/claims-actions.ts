import {createAsyncThunk} from "@reduxjs/toolkit";
import {FilterClaimRequest} from "../models/claims/requests";
import { createClaimAsync, getClaimsAsync } from "../services/claims-service";
import { ClaimModel } from "../models/claims/index";

export const claimGetClaims = createAsyncThunk(
    "claim/getClaims",
    async (request: FilterClaimRequest) => {
        return await getClaimsAsync(request);
    }
);
export const claimCreateClaim = createAsyncThunk(
    "claim/createClaim",
    async (request: ClaimModel) => {
        return await createClaimAsync(request);
    }
);