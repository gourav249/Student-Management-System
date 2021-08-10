import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const ForgetPassword = () => {
  const classes = useStyles();
  const [newEmail, setNewEmail] = useState("");
  const handelSubmit = (e) => {
    try {
      e.preventdefault();
    } catch (error) {}
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Your Password
          </Typography>
          <form className={classes.form} onSubmit={handelSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={newEmail}
              onChange={(e) => {
                setNewEmail(e.target.value);
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Get Verification Link
            </Button>

            <Button component={Link} to="/">
              Go Back
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ForgetPassword;
