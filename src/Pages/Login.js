import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
  makeStyles,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  Email,
  Lock,
  LockOutlined,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "5rem",
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
const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
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
            Login
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
              InputProps={{
                startAdornment: <Email />,
                style: {
                  borderColor: "red",
                },
              }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <OutlinedInput
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              id="password"
              autoComplete="current-password"
              type={"password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>

            <Button component={Link} to="/ForgetPassword">
              Forgot password?
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
