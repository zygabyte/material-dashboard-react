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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

// Material Dashboard 2 React examples
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";

// Billing page components
import Card from "@mui/material/Card";
import DataTable from "../../examples/Tables/DataTable";

// Data
import assignmentTableData from "../../layouts/billing/data/assignmentsTableData";
import Icon from "@mui/material/Icon";
import MDButton from "../../components/MDButton";
import { useAppDispatch } from "../../core/store/hooks";
import { useEffect, useState } from "react";
import { assignmentGetAssignments } from "../../core/actions/assignments-actions";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_ACTION,
  DEFAULT_PAGE_SIZE,
  IDLE,
  SUCCEEDED
} from "../../core/models/constants/index";
import { useSelector } from "react-redux";
import { getAssignments, getPageStatus } from "../../core/reducers/assignments-reducer";

function Assignments() {
  const dispatch = useAppDispatch();

  const [pageNumber, setPageNumber] = useState(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [pageAction, setPageAction] = useState(DEFAULT_PAGE_ACTION);

  const assignments = useSelector(getAssignments);
  const pageStatus = useSelector(getPageStatus);

  useEffect(() => {
    if (pageStatus === IDLE){
      let request = {
        pageNumber: pageNumber,
        pageSize: pageSize,
        paginate: pageAction,
      };

      dispatch(assignmentGetAssignments(request));
    }
  }, [pageNumber, pageSize, pageAction, dispatch]);

  if (pageStatus === SUCCEEDED) {
    const { columns, rows } = assignmentTableData(assignments);

    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDButton variant="gradient" color="veriskRed">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>&nbsp;new assignment
        </MDButton>
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Assignments
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={true}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>
    );
  }

  // look into a loading component...
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDButton variant="gradient" color="veriskRed">
        <Icon sx={{ fontWeight: "bold" }}>add</Icon>&nbsp;new assignment
      </MDButton>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Assignments
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {/*<DataTable*/}
                {/*  table={{ columns, rows }}*/}
                {/*  isSorted={true}*/}
                {/*  entriesPerPage={false}*/}
                {/*  showTotalEntries={false}*/}
                {/*  noEndBorder*/}
                {/*/>*/}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Assignments;
