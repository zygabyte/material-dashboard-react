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
import claimsTableData from "../../layouts/claims/data/claimsTableData";
import Icon from "@mui/material/Icon";
import MDButton from "../../components/MDButton";
import { useAppDispatch } from "../../core/store/hooks";
import { claimGetClaims } from "../../core/actions/claims-actions";
import { useEffect, useState } from "react";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_ACTION,
  DEFAULT_PAGE_SIZE,
  IDLE,
  SUCCEEDED
} from "../../core/models/constants/index";
import { useSelector } from "react-redux";
import { getClaims, getPageStatus } from "../../core/reducers/claims-reducer";
import { useNavigate } from "react-router-dom";

function Claims() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [pageAction, setPageAction] = useState(DEFAULT_PAGE_ACTION);
  
  const claims = useSelector(getClaims);
  const pageStatus = useSelector(getPageStatus); 
  
  useEffect(() => {
    if (pageStatus === IDLE){
      let request = {
        pageNumber: pageNumber,
        pageSize: pageSize,
        paginate: pageAction,
      };
      
      dispatch(claimGetClaims(request));
    }
  }, [pageNumber, pageSize, pageAction, dispatch]);
  
  if (pageStatus === SUCCEEDED){
    const {columns, rows} = claimsTableData(claims);

    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDButton variant="gradient" color="veriskRed" onClick={() => navigate('/claims/create')}>
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
      <MDButton variant="gradient" color="veriskRed" onClick={() => navigate('/claims/create')}>
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

export default Claims;
