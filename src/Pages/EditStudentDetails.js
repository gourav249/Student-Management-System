import { Card, Container, CssBaseline, makeStyles } from "@material-ui/core";
import MaterialTable from "material-table";
import Navigation from "../Components/Navigation";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(0.5),
  },
  card: {
    margin: theme.spacing(0),
  },
}));
const EditStudentDetails = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
    } catch (error) {}
  };
  return (
    <Navigation>
      <Container component="main" maxWidth="lg">
        <CssBaseline />

        <div className={classes.formControl}>
          <form onSubmit={handleSubmit}>
            <Card className={classes.card}>
              <MaterialTable
                title="Student Details"
                columns={[
                  {
                    title: "Name",
                    field: "name",
                  },
                  { title: "Student Photo", field: "studentPhoto" },
                  { title: "email", field: "email" },
                  {
                    title: "registration",
                    field: "registration",
                    type: "numeric",
                  },
                  {
                    title: "Birth Date",
                    field: "dateOfBirth",
                  },
                  {
                    title: "Gender",
                    field: "gender",
                  },
                  {
                    title: "Country",
                    field: "country",
                  },
                ]}
                data={[
                  {
                    name: "Gourav Kumar",
                    studentPhoto: "pic",
                    email: "gouravkumar@gmail.com",
                    registration: "160301121249",
                    dateOfBirth: "05-11-1996",
                    gender: 1987,
                    country: 63,
                  },
                  {
                    name: "Gourav Kumar",
                    studentPhoto: "pic",
                    email: "gouravkumar@gmail.com",
                    registration: "160301121249",
                    dateOfBirth: "05-11-1996",
                    gender: 1987,
                    country: 63,
                  },
                ]}
                options={{
                  headerStyle: {
                    backgroundColor: "#01579b",
                    color: "#FFF",
                  },
                  exportButton: true,
                  sorting: true,
                  selection: true,
                }}
              />
            </Card>
          </form>
        </div>
      </Container>
    </Navigation>
  );
};

export default EditStudentDetails;
