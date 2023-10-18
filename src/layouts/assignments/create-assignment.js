import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import MDBox from "../../components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "../../components/MDTypography";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";
import Footer from "../../examples/Footer";

function CreateAssignment() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="success"
                mx={2}
                mt={-3}
                p={3}
                mb={1}
                textAlign="center"
              >
                <MDTypography variant="h5" fontWeight="medium" color="white" mt={1}>
                  Create a new assignment
                </MDTypography>
                <MDTypography display="block" variant="button" color="white" my={1}>
                  Enter assignment details
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>

                {/*Instruction Type*/}
                <MDBox component="form" role="form">
                  <MDTypography variant="h5" fontWeight="medium" mt={1} mb={3}>
                    Instruction Type
                  </MDTypography>
                  <MDBox mb={2}>
                    <MDInput type="text" label="What type of instruction would you like to create" variant="standard" size="small" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Please select a job type for this instruction" variant="standard" size="small" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Please choose an assignee" variant="standard" size="small" fullWidth />
                  </MDBox>
                </MDBox>


                {/*Instructions*/}
                <MDBox component="form" role="form" mt={5}>
                  <MDTypography variant="h5" fontWeight="medium" mt={1} mb={3}>
                    Instructions
                  </MDTypography>

                  <MDBox mb={3}>
                    <MDInput label="Please provide instructions for the assignee" multiline rows={7} fullWidth />
                  </MDBox>

                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth>
                      create assignment
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CreateAssignment;