import Card from "@mui/material/Card";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Grid from "@mui/material/Grid";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../core/store/hooks";
import { claimCreateClaim } from "../../core/actions/claims-actions";
import { useNavigate } from "react-router-dom";

function CreateClaim() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const schema = yup.object().shape({
    claimNumber: yup.string().required("Please provide claim number"),
    peril: yup.number().required("Please provide peril"),
    lossDescription: yup.string().required("Please provide description of loss"),
    lossDate: yup.string().required("Please provide loss date"),
    receiptDate: yup.string().required("Please provide receipt date"),
    cause: yup.number().required("Please provide cause"),
    specialAttention: yup.number().required("Please provide special attention"),
    claimType: yup.number().required("Please provide claim type"),
    policy: yup.object().shape({
      policyNumber: yup.string().required("Please provide policy number"),
      inceptionDate: yup.string().required("Please provide inception date"),
      effectiveDate: yup.string().required("Please provide inception date"),
      expiryDate: yup.string().required("Please provide expiry date"),
      buildingSumInsured: yup.number().required("Please provide building sum insured"),
      buildingExcess: yup.number().required("Please provide building excess"),
      contentSumInsured: yup.number().required("Please provide content sum insured"),
      contentExcess: yup.number().required("Please provide content excess"),
    }),
    policyholder: yup.object().shape({
      customerName: yup.string().required("Please provide customer name"),
      riskAddress:  yup.object().shape({
        type: yup.number().required("Please provide address type"),
        street: yup.string().required("Please provide street"),
        city: yup.string().required("Please provide city"),
        postal: yup.string().required("Please provide postal"),
        country: yup.string().required("Please provide country"),
        state: yup.string().required("Please provide state"),
        county: yup.string().required("Please provide county"),
      }),
      emailAddress: yup.string().email().required("Please provide email address"),
      phone: yup.object().shape({
        type: yup.number().required("Please provide phone type"),
        number: yup.string().required("Please provide number"),
        extension: yup.string().required("Please provide extension"),
      }),
    }),
  });


  const {
    register,
    // formState: { errors },
    handleSubmit,
    setError,
    // reset,
    // setValue,
    // watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const onSubmit = async (claim) => {
    console.log('claim to be created...', claim);
    try {
      const response = await dispatch(claimCreateClaim(claim)).unwrap();

      console.log('response from create...', response);
      navigate('/claims');
    } catch (e){
      console.log('error from catch exception ', e);
      setError('serverError', {
        type: 'serverSideError',
        message: 'something is wrong '
      })
    }
  };
  
  const onError = (errors, e) => console.log(errors, e);
  
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
                  <MDBox component="form" role="form" onSubmit={handleSubmit(onSubmit, onError)}> 

                    {/*Policyholder Information*/}
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <MDTypography variant="h5" fontWeight="medium" mt={1} mb={3}>
                          Policyholder Details
                        </MDTypography>
                        <MDBox mb={2}>
                          <MDInput type="text" label="Customer Name" {...register("policyholder.customerName")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <MDTypography variant="h6" fontWeight="regular" mt={1}>
                              Risk Address
                            </MDTypography>
                          </Grid>

                          <Grid item xs={12}>
                            <MDBox mb={2}>
                              <MDInput type="text" label="Address Type" {...register("policyholder.riskAddress.type")} variant="standard" size="small" fullWidth />
                            </MDBox>
                          </Grid>

                          {/*Policyholder address details*/}
                          <Grid item xs={12} md={6}>
                            <MDBox mb={2}>
                              <MDInput type="text" label="Street" {...register("policyholder.riskAddress.street")} variant="standard" size="small" fullWidth />
                            </MDBox>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <MDBox mb={2}>
                              <MDInput type="text" label="City" {...register("policyholder.riskAddress.city")} variant="standard" size="small" fullWidth />
                            </MDBox>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <MDBox mb={2}>
                              <MDInput type="text" label="Postal" {...register("policyholder.riskAddress.postal")} variant="standard" size="small" fullWidth />
                            </MDBox>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <MDBox mb={2}>
                              <MDInput type="text" label="Country" {...register("policyholder.riskAddress.country")} variant="standard" size="small" fullWidth />
                            </MDBox>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <MDBox mb={2}>
                              <MDInput type="text" label="State" {...register("policyholder.riskAddress.state")} variant="standard" size="small" fullWidth />
                            </MDBox>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <MDBox mb={2}>
                              <MDInput type="text" label="County" {...register("policyholder.riskAddress.county")} variant="standard" size="small" fullWidth />
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
                              <MDInput type="text" label="Phone Type" {...register("policyholder.phone.type")} variant="standard" size="small" fullWidth />
                            </MDBox>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <MDBox mb={2}>
                              <MDInput type="text" label="Number" {...register("policyholder.phone.number")} variant="standard" size="small" fullWidth />
                            </MDBox>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <MDBox mb={2}>
                              <MDInput type="text" label="Extension" {...register("policyholder.phone.extension")} variant="standard" size="small" fullWidth />
                            </MDBox>
                          </Grid>
                        </Grid>
                        <MDBox mt={2} mb={2}>
                          <MDInput type="email" label="Email" {...register("policyholder.emailAddress")} variant="standard" size="small" fullWidth />
                        </MDBox>
                      </Grid>
                    </Grid>

                    {/*Claim Information*/}
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <MDTypography variant="h5" fontWeight="medium" mt={1} mb={3}>
                          Claim Information
                        </MDTypography>

                        <MDBox mb={3}>
                          <MDInput type="text" label="Claim Number" {...register("claimNumber")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="text" label="Date of Loss" {...register("lossDate")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="text" label="Date Received" {...register("receiptDate")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="text" label="Peril" {...register("peril")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="text" label="Cause" {...register("cause")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="text" label="Description of Loss" {...register("lossDescription")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="text" label="Claim Type" {...register("claimType")}  variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="text" label="Special Attention" {...register("specialAttention")} variant="standard" size="small" fullWidth />
                        </MDBox>
                      </Grid>
                    </Grid>

                    {/*Policy information*/}
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <MDTypography variant="h5" fontWeight="medium" mt={1} mb={3}>
                          Policy Information
                        </MDTypography>

                        <MDBox mb={3}>
                          <MDInput type="text" label="Policy Number" {...register("policy.policyNumber")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="text" label="Inception Date" {...register("policy.inceptionDate")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="text" label="Effective Date" {...register("policy.effectiveDate")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="text" label="Expiry Date" {...register("policy.expiryDate")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="number" label="Building Sum Insured" {...register("policy.buildingSumInsured")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="number" label="Building Excess" {...register("policy.buildingExcess")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="number" label="Content Sum Insured" {...register("policy.contentSumInsured")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mb={3}>
                          <MDInput type="number" label="Content Excess" {...register("policy.contentExcess")} variant="standard" size="small" fullWidth />
                        </MDBox>

                        <MDBox mt={4} mb={1}>
                          <MDButton variant="gradient" color="info" fullWidth type="submit">
                            create claim
                          </MDButton>
                        </MDBox>
                      </Grid>
                    </Grid>
                    
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