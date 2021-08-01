import {
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";

import { DropzoneArea } from "material-ui-dropzone";
import Navigation from "../Components/Navigation";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(0),
  },
  card: {
    margin: theme.spacing(0),
  },
}));
const StudentSupport = () => {
  const classes = useStyles();
  const handleImages = (e) => {
    try {
      e.preventDefault();
    } catch (error) {}
  };
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
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
                      //   value={name}
                      //   onChange={(e) => setName(e.target.value)}
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
                      //   value={email}
                      //   onChange={(e) => setEmail(e.target.value)}
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
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <DropzoneArea
                      dropzoneText={`Please Upload Support Description `}
                      filesLimit={10}
                      acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                      // showPreviews={true}
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
                        Send Notification
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

export default StudentSupport;
