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
import { AssignmentStatuses, JobTypes } from "../../../core/models/assignments/constants/index";
import { ClaimDetails } from "../../claims/data/claimsTableData";

export default function data(assignments) {
  const Assignment = ({ name, email }) => (
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
  
  const assignmentsRows = [];
  let i = 1;
  
  assignments.forEach(assignment => {
    assignmentsRows.push({
      serial: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {i++}
        </MDTypography>
      ),
      insured: <Assignment name={assignment.customerName} email={assignment.customerEmail} />,
      claim: <ClaimDetails title={assignment.claimNumber} description="" />,
      status: (
        <MDBox ml={-1}>
          <MDBadge badgeContent={AssignmentStatuses[assignment.assignmentStatus].name} 
                   color="blue" variant="gradient" size="sm" />
        </MDBox>
      ),
      data: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {assignment.dataSet}
        </MDTypography>
      ),
      estimate: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          £{assignment.estimate}
        </MDTypography>
      ),
      assignee: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {assignment.assignee}
        </MDTypography>
      ),
      type: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {JobTypes[assignment.jobType].name}
        </MDTypography>
      ),
    })
  });

  return {
    columns: [
      { Header: "s/n", accessor: "serial", align: "left" },
      { Header: "insured", accessor: "insured", align: "left" },
      { Header: "claim number", accessor: "claim", align: "left" },
      { Header: "assignment status", accessor: "status", align: "center" },
      { Header: "data set", accessor: "data", align: "left" },
      { Header: "estimate", accessor: "estimate", align: "center" },
      { Header: "assignee", accessor: "assignee", align: "center" },
      { Header: "job type", accessor: "type", align: "center" },
    ],
    rows: assignmentsRows,
  };
}
