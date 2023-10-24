import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import MDBox from "../../components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "../../components/MDTypography";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";
import Footer from "../../examples/Footer";
import { useAppDispatch } from "../../core/store/hooks";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { assignmentCreateAssignment } from "../../core/actions/assignments-actions";

function CreateAssignment() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const schema = yup.object().shape({
    jobType: yup.number().required("Please provide job type"),
    estimate: yup.number().required("Please provide estimate"),
    dataSet: yup.string().required("Please provide data set"),
    assignee: yup.string().required("Please provide assignee"),
    notes: yup.string().required("Please provide note"),
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

  const onSubmit = async (assignment) => {
    try {
      assignment.claimId = 'dbed5a92-2f80-4796-8e14-87243a1d1680';
      
      console.log('assignment to be created ', assignment);
      const response = await dispatch(assignmentCreateAssignment(assignment)).unwrap();

      console.log('response from create assignment...', response);
      navigate('/assignments');
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
                  Create a new assignment
                </MDTypography>
                <MDTypography display="block" variant="button" color="white" my={1}>
                  Enter assignment details
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>

                <MDBox component="form" role="form" onSubmit={handleSubmit(onSubmit, onError)}>
                  {/*Instruction Type*/}
                  <MDTypography variant="h5" fontWeight="medium" mt={1} mb={3}>
                    Instruction Type
                  </MDTypography>
                  <MDBox mb={2}>
                    <MDInput type="text" label="What type of instruction would you like to create" variant="standard" size="small" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Please select a job type for this instruction" {...register("jobType")} variant="standard" size="small" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="number" label="Please enter assignment estimate" {...register("estimate")} variant="standard" size="small" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Please enter assignment dataset" {...register("dataSet")} variant="standard" size="small" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Please choose an assignee" {...register("assignee")} variant="standard" size="small" fullWidth />
                  </MDBox>
                  
                  
                  {/*Instructions*/}
                  <MDTypography variant="h5" fontWeight="medium" mt={1} mb={3}>
                    Instructions
                  </MDTypography>

                  <MDBox mb={3}>
                    <MDInput text="text" label="Please provide instructions for the assignee" {...register("notes")} multiline rows={7} fullWidth />
                  </MDBox>

                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth type="submit">
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