import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import login from "./Login";
import AdminIndex from "./AdminIndex";

const Main = () => {
  return (
    <Router>
      <Route path="/login" exact component={login} />
      <Route path="/index" component={AdminIndex} />
      <Redirect to="/index" />
    </Router>
  );
};
export default Main;
