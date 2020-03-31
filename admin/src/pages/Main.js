import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import login from "./Login";
import AdminIndex from "./AdminIndex";

const Main = () => {
  return (
    <Router>
      <Route path="/login/" component={login} />
      <Route path="/" component={AdminIndex} />
    </Router>
  );
};
export default Main;
