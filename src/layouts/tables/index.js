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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import DataTable from "../../examples/Tables/DataTable";

// Data
import claimsTableData from "../../layouts/tables/data/authorsTableData";
import Icon from "@mui/material/Icon";
import MDButton from "../../components/MDButton";
import { useAppDispatch, useAppStateSelector } from "../../core/store/hooks";
import { claimGetClaims } from "../../core/actions/claims-actions";
import { useEffect } from "react";

function Tables() {
  const claimsState = useAppStateSelector((state) => state.claimsState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    let request = {
      pageNumber: 1,
      pageSize: 20,
      paginate: true,
    };
    dispatch(claimGetClaims(request));
  }, [claimsState.pageNumber]);
  
  const { columns, rows } = claimsTableData(claimsState.claims);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDButton variant="gradient" color="veriskRed">
        <Icon sx={{ fontWeight: "bold" }}>add</Icon>
        &nbsp;new claim
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
                  Claims
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
          {/*<Grid item xs={12}>*/}
          {/*  <Card>*/}
          {/*    <MDBox*/}
          {/*      mx={2}*/}
          {/*      mt={-3}*/}
          {/*      py={3}*/}
          {/*      px={2}*/}
          {/*      variant="gradient"*/}
          {/*      bgColor="info"*/}
          {/*      borderRadius="lg"*/}
          {/*      coloredShadow="info"*/}
          {/*    >*/}
          {/*      <MDTypography variant="h6" color="white">*/}
          {/*        Projects Table*/}
          {/*      </MDTypography>*/}
          {/*    </MDBox>*/}
          {/*    <MDBox pt={3}>*/}
          {/*      <DataTable*/}
          {/*        table={{ columns: pColumns, rows: pRows }}*/}
          {/*        isSorted={false}*/}
          {/*        entriesPerPage={false}*/}
          {/*        showTotalEntries={false}*/}
          {/*        noEndBorder*/}
          {/*      />*/}
          {/*    </MDBox>*/}
          {/*  </Card>*/}
          {/*</Grid>*/}
        </Grid>
        {/*<MDPagination*/}
        {/*  item*/}
        {/*  key={option}*/}
        {/*  onClick={() => gotoPage(Number(option))}*/}
        {/*>*/}
        {/*  1*/}
        {/*</MDPagination>*/}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
