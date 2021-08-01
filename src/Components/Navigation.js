import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Tooltip, Zoom } from "@material-ui/core";
import {
  AccountCircle,
  ContactSupport,
  DashboardOutlined,
  ExitToApp,
  PersonAdd,
  Visibility,
} from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  sidebar: {
    backgroundColor: theme.palette.background.paper,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Navigation = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleSignOut = async () => {
    try {
      history.push("/");
    } catch (error) {}
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Student Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List component="nav" className={classes.sidebar}>
          <Tooltip
            title="Dashboard"
            TransitionComponent={Zoom}
            placement="start-top"
            TransitionProps={{ timeout: 600 }}
          >
            <ListItem button component={Link} to="/StudentDashboard">
              <ListItemIcon>
                <DashboardOutlined />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
          </Tooltip>

          <Tooltip
            title="Add Details"
            TransitionComponent={Zoom}
            placement="start-top"
            TransitionProps={{ timeout: 600 }}
          >
            <ListItem button component={Link} to="/AddStudentDetails">
              <ListItemIcon>
                <PersonAdd />
              </ListItemIcon>
              <ListItemText primary={"Add Details"} />
            </ListItem>
          </Tooltip>

          <Tooltip
            title="View Details"
            TransitionComponent={Zoom}
            placement="start-top"
            TransitionProps={{ timeout: 600 }}
          >
            <ListItem button component={Link} to="/EditStudentDetails">
              <ListItemIcon>
                <Visibility />
              </ListItemIcon>
              <ListItemText primary={"View Details"} />
            </ListItem>
          </Tooltip>

          <Tooltip
            title="Support"
            TransitionComponent={Zoom}
            placement="start-top"
            TransitionProps={{ timeout: 600 }}
          >
            <ListItem button component={Link} to="/StudentSupport">
              <ListItemIcon>
                <ContactSupport />
              </ListItemIcon>
              <ListItemText primary={"Support"} />
            </ListItem>
          </Tooltip>

          <Tooltip
            title="View Profile"
            TransitionComponent={Zoom}
            placement="start-top"
            TransitionProps={{ timeout: 600 }}
          >
            <ListItem button component={Link} to="/StudentProfile">
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary={"Profile"} />
            </ListItem>
          </Tooltip>
        </List>
        <Divider />
        <List component="nav" className={classes.sidebar}>
          <Tooltip
            title="logout"
            TransitionComponent={Zoom}
            placement="start-top"
            TransitionProps={{ timeout: 600 }}
          >
            <ListItem button onClick={handleSignOut}>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary={"logout"} />
            </ListItem>
          </Tooltip>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Navigation;
