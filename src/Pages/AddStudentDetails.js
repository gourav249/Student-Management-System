import {
  Container,
  CssBaseline,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import useCountry from "../Hooks/useCountry";
import { DropzoneArea } from "material-ui-dropzone";
import { useState } from "react";
import { Send } from "@material-ui/icons";
import Navigation from "../Components/Navigation";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(5),
  },
  card: {
    margin: theme.spacing(5),
  },
}));

const AddStudentDetails = () => {
  const classes = useStyles();
  const { countryList } = useCountry();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registration, setRegistration] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [studentPhoto, setStudentPhoto] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(name);
      console.log(email);
      console.log(registration);
      console.log(dateOfBirth);
      console.log(gender);
      console.log(country);
      console.log(studentPhoto);
    } catch (error) {}
  };

  const handleImages = (file) => {
    try {
      const arr = file;
      setStudentPhoto(arr);
    } catch (error) {}
  };
  return (
    <Navigation>
      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <div className={classes.formControl}>
          <form onSubmit={handleSubmit}>
            <Card className={classes.card}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="Student Name"
                      name="Student Name"
                      variant="outlined"
                      fullWidth
                      id="studentname"
                      label="Student Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      autoComplete="Student Email"
                      name="Student Email"
                      variant="outlined"
                      fullWidth
                      id="studentemail"
                      label="Student Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      autoComplete="Student Registration"
                      name="Student Registration"
                      variant="outlined"
                      fullWidth
                      id="studentregistration"
                      label="Student Registration"
                      value={registration}
                      onChange={(e) => setRegistration(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="Student D.O.B"
                      name="Student D.O.B"
                      variant="outlined"
                      type="date"
                      fullWidth
                      id="studentDOB"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        label="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Autocomplete
                      id="country"
                      options={countryList}
                      getOptionLabel={(option) => option.name}
                      onChange={(e, value) => setCountry(value)}
                      value={country}
                      fullWidth
                      disablePortal={true}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Country"
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <DropzoneArea
                      dropzoneText={`Please Upload Student Images `}
                      filesLimit={10}
                      acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                      showPreviews={true}
                      onChange={(file) => handleImages(file)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <div
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={<Send />}
                        style={{
                          width: "50%",
                          margin: "0 auto",
                        }}
                      >
                        Add Details
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
        </div>
      </Container>
    </Navigation>
  );
};

export default AddStudentDetails;
