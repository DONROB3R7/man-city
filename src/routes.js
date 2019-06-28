import React from "react";
import Layout from "./HOC/Layout";
import { Switch, Route } from "react-router-dom";

import Home from "../src/home";
import SignIn from "../src/signin";
import Dashboard from "./admin/Dashboard";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Dashboard} path="/dashboard" />
        <Route exact component={SignIn} path="/sign_in" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
