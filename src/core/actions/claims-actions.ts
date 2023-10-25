import {createAsyncThunk} from "@reduxjs/toolkit";
import {FilterClaimRequest} from "../models/claims/requests";
import { createClaimAsync, getClaimsAsync } from "../services/claims-service";
import { ClaimModel } from "../models/claims/index";
import { ListResponse, ObjectResponse } from "../models/common/responses/index";
import { DefaultRequest } from "../models/common/requests/index";

export const claimGetClaims = createAsyncThunk(
    "claim/getClaims",
    async (request?: FilterClaimRequest) : Promise<ListResponse<ClaimModel>> => {
      if (request === undefined) request = DefaultRequest;
      
      return await getClaimsAsync(request);
    }
);
export const claimCreateClaim = createAsyncThunk(
    "claim/createClaim",
    async (request: ClaimModel) : Promise<ObjectResponse<ClaimModel>> => {
        return await createClaimAsync(request);
    }
);