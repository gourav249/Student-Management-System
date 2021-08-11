import { Navigation } from "../Components";
import { Container, CssBaseline, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "310px",
  },
  topPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "150px",
  },
  bottomPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "150px",
  },
}));
const StudentProfile = () => {
  const classes = useStyles();
  return (
    <Navigation>
      <CssBaseline />
      <div
        style={{
          margin: "2rem auto",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item md={6} sm={6}>
              <Paper className={classes.rightPaper}>xs=12</Paper>
            </Grid>
            <Grid item md={6} sm={6}>
              <Grid container spacing={1}>
                <Grid item md={12} sm={12}>
                  <Paper className={classes.topPaper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item md={12} sm={12}>
                  <Paper className={classes.bottomPaper}>xs=12 sm=6</Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Navigation>
  );
};

export default StudentProfile;
