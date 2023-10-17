import Card from "@mui/material/Card";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Grid from "@mui/material/Grid";

function CreateClaim() {
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
                  Create a new claim
                </MDTypography>
                <MDTypography display="block" variant="button" color="white" my={1}>
                  Enter claim details
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                
                {/*Policyholder Information*/}
                <MDBox component="form" role="form">
                  <MDTypography variant="h5" fontWeight="medium" mt={1} mb={3}>
                    Policyholder Details
                  </MDTypography>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Customer Name" variant="standard" size="small" fullWidth />
                  </MDBox>

                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <MDTypography variant="h6" fontWeight="regular" mt={1}>
                        Risk Address
                      </MDTypography>
                    </Grid>
                    
                    <Grid item xs={12}>
                      <MDBox mb={2}>
                        <MDInput type="text" label="Address Type" variant="standard" size="small" fullWidth />
                      </MDBox>
                    </Grid>
                    
                    {/*Policyholder address details*/}
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDInput type="text" label="Street" variant="standard" size="small" fullWidth />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDInput type="text" label="City" variant="standard" size="small" fullWidth />
                      </MDBox>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDInput type="text" label="Postal" variant="standard" size="small" fullWidth />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDInput type="text" label="Country" variant="standard" size="small" fullWidth />
                      </MDBox>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDInput type="text" label="State" variant="standard" size="small" fullWidth />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDInput type="text" label="County" variant="standard" size="small" fullWidth />
                      </MDBox>
                    </Grid>
                  </Grid>
                  
                  {/*Policyholder phone details*/}
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <MDTypography variant="h6" fontWeight="regular" mt={1}>
                        Phone
                      </MDTypography>
                    </Grid>
                    
                    <Grid item xs={12}>
                      <MDBox mb={2}>
                        <MDInput type="text" label="Phone Type" variant="standard" size="small" fullWidth />
                      </MDBox>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDInput type="text" label="Number" variant="standard" size="small" fullWidth />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDInput type="text" label="Extension" variant="standard" size="small" fullWidth />
                      </MDBox>
                    </Grid>
                  </Grid>
                  <MDBox mt={2} mb={2}>
                    <MDInput type="email" label="Email" variant="standard" size="small" fullWidth />
                  </MDBox>
                </MDBox>

                
                {/*Claim Information*/}
                <MDBox component="form" role="form" mt={5}>
                  <MDTypography variant="h5" fontWeight="medium" mt={1} mb={3}>
                    Claim Information 
                  </MDTypography>
                  
                  <MDBox mb={3}>
                    <MDInput type="text" label="Claim Number" variant="standard" size="small" fullWidth />
                  </MDBox>
                  
                  <MDBox mb={3}>
                    <MDInput type="text" label="Date of Loss" variant="standard" size="small" fullWidth />
                  </MDBox>
                  
                  <MDBox mb={3}>
                    <MDInput type="text" label="Peril" variant="standard" size="small" fullWidth />
                  </MDBox>
                  
                  <MDBox mb={3}>
                    <MDInput type="text" label="Cause" variant="standard" size="small" fullWidth />
                  </MDBox>
                  
                  <MDBox mb={3}>
                    <MDInput type="text" label="Description of Loss" variant="standard" size="small" fullWidth />
                  </MDBox>
                  
                  <MDBox mb={3}>
                    <MDInput type="text" label="Claim Type" variant="standard" size="small" fullWidth />
                  </MDBox>
                  
                  <MDBox mb={3}>
                    <MDInput type="text" label="Special Attention" variant="standard" size="small" fullWidth />
                  </MDBox>
                </MDBox>



                {/*Policy information*/}
                <MDBox component="form" role="form" mt={5}>
                  <MDTypography variant="h5" fontWeight="medium" mt={1} mb={3}>
                    Policy Information
                  </MDTypography>

                  <MDBox mb={3}>
                    <MDInput type="text" label="Policy Number" variant="standard" size="small" fullWidth />
                  </MDBox>

                  <MDBox mb={3}>
                    <MDInput type="text" label="Inception Date" variant="standard" size="small" fullWidth />
                  </MDBox>

                  <MDBox mb={3}>
                    <MDInput type="text" label="Effective Date" variant="standard" size="small" fullWidth />
                  </MDBox>

                  <MDBox mb={3}>
                    <MDInput type="text" label="Expiry Date" variant="standard" size="small" fullWidth />
                  </MDBox>

                  <MDBox mb={3}>
                    <MDInput type="text" label="Building Sum Insured" variant="standard" size="small" fullWidth />
                  </MDBox>

                  <MDBox mb={3}>
                    <MDInput type="text" label="Building Excess" variant="standard" size="small" fullWidth />
                  </MDBox>

                  <MDBox mb={3}>
                    <MDInput type="text" label="Content Sum Insured" variant="standard" size="small" fullWidth />
                  </MDBox>

                  <MDBox mb={3}>
                    <MDInput type="text" label="Content Excess" variant="standard" size="small" fullWidth />
                  </MDBox>

                  <MDBox mb={3}>
                    <MDInput type="text" label="Cause" variant="standard" size="small" fullWidth />
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth>
                      create claim
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

export default CreateClaim;