import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import login from "./Login";
import AdminIndex from "./AdminIndex";

const Main = () => {
  return (
    <Router>
      <Route path="/" exact component={login} />
      <Route path="/index" component={AdminIndex} />
    </Router>
  );
};
export default Main;
