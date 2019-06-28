import React from "react";
import Layout from "./HOC/Layout";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./Componets/authRoutes/privateRountes";
import PublicRoute from "./Componets/authRoutes/publicRoutes";

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
        <PublicRoute
          {...props}
          path="/sign_in"
          restricted={true}
          exact
          component={SignIn}
        />
        <PublicRoute
          {...props}
          path="/"
          restricted={false}
          exact
          component={Home}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
