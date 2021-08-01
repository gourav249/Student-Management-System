import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { StudentDashboard } from "./Pages";
import AddStudentDetails from "./Pages/AddStudentDetails";
import EditStudentDetails from "./Pages/EditStudentDetails";
import ForgetPassword from "./Pages/ForgetPassword";
import Login from "./Pages/Login";
import StudentProfile from "./Pages/StudentProfile";
import StudentSupport from "./Pages/StudentSupport";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/StudentSupport" component={StudentSupport} />
        <Route exact path="/ForgetPassword" component={ForgetPassword} />
        <Route
          exact
          path="/EditStudentDetails"
          component={EditStudentDetails}
        />
        <Route exact path="/AddStudentDetails" component={AddStudentDetails} />
        <Route exact path="/StudentDashboard" component={StudentDashboard} />
        <Route exact path="/StudentProfile" component={StudentProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
