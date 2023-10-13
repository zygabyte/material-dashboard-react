/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDBadge from "../../../components/MDBadge";
import { ClaimStatuses, PerilTypes, SpecialAttentions } from "../../../core/models/claims/constants";

export const ClaimDetails = ({ title, description }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {title}
    </MDTypography>
    <MDTypography variant="caption">{description}</MDTypography>
  </MDBox>
); 

export default function data(claims) {
  const Claim = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      {/*<MDAvatar src={image} name={name} size="sm" />*/}
      <MDBox lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );
  
  const claimsRows = [];
  let i = 1;
  
  claims.forEach(claim => {
    claimsRows.push({
      serial: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {i++}
        </MDTypography>
      ),
      insured: <Claim name={claim.policyholder.customerName} email={claim.policyholder.emailAddress} />,
      claim: <ClaimDetails title={claim.claimNumber} description="" />,
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent={ClaimStatuses[claim.claimStatus].name} color="blue" variant="gradient" size="sm" />
        </MDBox>
      ),
      count: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {claim.assignments}
        </MDTypography>
      ),
      estimate: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          £{claim.estimate}
        </MDTypography>
      ),
      peril: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {PerilTypes[claim.peril].name}
        </MDTypography>
      ),
      attention: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {SpecialAttentions[claim.specialAttention].name}
        </MDTypography>
      ),
    })
  });

  return {
    columns: [
      { Header: "s/n", accessor: "serial", align: "left" },
      { Header: "insured", accessor: "insured", align: "left" },
      { Header: "claim number", accessor: "claim", align: "left" },
      { Header: "claim status", accessor: "status", align: "center" },
      { Header: "assignment count", accessor: "count", align: "center" },
      { Header: "estimate", accessor: "estimate", align: "center" },
      { Header: "peril", accessor: "peril", align: "center" },
      { Header: "special attention", accessor: "attention", align: "center" },
    ],
    rows: claimsRows,
  };
}
