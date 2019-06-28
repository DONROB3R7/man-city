import React from "react";
import Layout from "./HOC/Layout";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./Componets/authRoutes/privateRountes";

import Home from "../src/home";
import SignIn from "../src/signin";
import Dashboard from "./admin/Dashboard";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <Route exact component={SignIn} path="/sign_in" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
