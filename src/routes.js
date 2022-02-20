import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import ProfilePage from "./pages/Profile";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/Search" component={SearchPage} />
    <Route path="/Profile" component={ProfilePage}></Route>
    <Route path="/login" component={Login} />
    <Route path="/SignUp" component={SignUp} />
  </Switch>
);

export default Routes;
