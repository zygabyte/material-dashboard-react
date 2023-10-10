
export interface ClaimModel {
    claimId: string;
    claimNumber: string;
    peril: number;
    cause: number;
    specialAttention: number;
    lossDescription: string;
    lossDate: Date;
    receiptDate: Date;
    claimType: number;
    claimStatus: number;
    estimate: number;
    assignments: number;
    
    policy: PolicyModel;
    policyholder: PolicyholderModel;
}

export interface PolicyModel {
    policyNumber: string;
    inceptionDate: Date;
    effectiveDate: Date;
    expiryDate: Date;
    buildingSumInsured: number;
    buildingExcess: number;
    contentSumInsured: number;
    contentExcess: number;
}

export interface PolicyholderModel {
    customerName: string;
    riskAddress: AddressModel;
    emailAddress: string;
    phone: PhoneModel;
}

export interface AddressModel {
    type: number;
    street: string;
    city: string;
    postal: string;
    country: string;
    state: string;
    county?: string | null;
}

export interface PhoneModel {
    type: number;
    number: string;
    extension?: string | null;
}
