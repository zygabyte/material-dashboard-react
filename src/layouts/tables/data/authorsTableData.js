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
// import MDAvatar from "components/MDAvatar";
import MDBadge from "../../../components/MDBadge";
import { Causes, ClaimStatuses, PerilTypes, SpecialAttentions } from "../../../core/models/claims/constants";

export default function data(claims) {
  const Author = ({ name, email }) => (
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

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );
  
  const claimsRows = [];
  
  claims.forEach(claim => {
    claimsRows.push({
      insured: <Author name={claim.policyholder.customerName} email={claim.policyholder.emailAddress} />,
      claim: <Job title={claim.claimNumber} description="" />,
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
      { Header: "insured", accessor: "insured", align: "left" },
      { Header: "claim number", accessor: "claim", align: "center" },
      { Header: "claim status", accessor: "status", align: "center" },
      { Header: "assignment count", accessor: "count", align: "center" },
      { Header: "estimate", accessor: "estimate", align: "center" },
      { Header: "peril", accessor: "peril", align: "center" },
      { Header: "special attention", accessor: "attention", align: "center" },
    ],
    
    rows: claimsRows,

    // rows: [
    //   {
    //     insured: <Author name="Mr. John Michael" email="johnmichael@gmail.com" />,
    //     claim: <Job title="H02929109LL3901" description="" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="inspection" color="blue" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     count: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         5
    //       </MDTypography>
    //     ),
    //     estimate: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         £3,500
    //       </MDTypography>
    //     ),
    //     peril: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Escape of water
    //       </MDTypography>
    //     ),
    //     attention: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Lorem Ipsum
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     insured: <Author name="Mr. James White" email="jameswhite@gmail.com" />,
    //     claim: <Job title="H02134709LL3901" description="" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="canceled" color="dark" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     count: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         3
    //       </MDTypography>
    //     ),
    //     estimate: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         £2,000
    //       </MDTypography>
    //     ),
    //     peril: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Escape of water
    //       </MDTypography>
    //     ),
    //     attention: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Lorem Ipsum
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     insured: <Author name="Mrs. Laura Smith" email="laurasmith@gmail.com" />,
    //     claim: <Job title="H01224709LL3901" description="" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="fulfillment" color="success" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     count: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         3
    //       </MDTypography>
    //     ),
    //     estimate: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         £3,000
    //       </MDTypography>
    //     ),
    //     peril: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Escape of water
    //       </MDTypography>
    //     ),
    //     attention: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Lorem Ipsum
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     insured: <Author name="Dr. Jane Mark" email="janemark@gmail.com" />,
    //     claim: <Job title="H01224709SL3322" description="" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="fulfillment" color="success" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     count: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         4
    //       </MDTypography>
    //     ),
    //     estimate: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         £3,500
    //       </MDTypography>
    //     ),
    //     peril: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Escape of water
    //       </MDTypography>
    //     ),
    //     attention: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Lorem Ipsum
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     insured: <Author name="Mr. Johnny Cash" email="johnnycash@gmail.com" />,
    //     claim: <Job title="H01224779SA3431" description="" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="fulfillment" color="success" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     count: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         7
    //       </MDTypography>
    //     ),
    //     estimate: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         £7,400
    //       </MDTypography>
    //     ),
    //     peril: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Leakage of gas
    //       </MDTypography>
    //     ),
    //     attention: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Lorem Ipsum
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     insured: <Author name="Mr. Johnny Cash" email="johnnycash@gmail.com" />,
    //     claim: <Job title="H01224779SA3431" description="" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge badgeContent="fulfillment" color="success" variant="gradient" size="sm" />
    //       </MDBox>
    //     ),
    //     count: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         7
    //       </MDTypography>
    //     ),
    //     estimate: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         £7,400
    //       </MDTypography>
    //     ),
    //     peril: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Air pressure
    //       </MDTypography>
    //     ),
    //     attention: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         Lorem Ipsum
    //       </MDTypography>
    //     ),
    //   },
    // ],
  };
}
