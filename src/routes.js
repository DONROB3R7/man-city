import React from "react";
import Layout from "./HOC/Layout";
import { Switch } from "react-router-dom";

import PrivateRoute from "./Componets/authRoutes/privateRountes";
import PublicRoute from "./Componets/authRoutes/publicRoutes";

import Home from "../src/home";
import SignIn from "../src/signin";
import Dashboard from "./admin/Dashboard";
import AdminMatches from "./admin/matches";
import AddEditMatch from "../src/admin/matches/addEditMatch";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatch}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
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
