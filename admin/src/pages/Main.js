import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import login from "./Login";

const Main = () => {
  return (
    <Router>
      <Route path="/login/" component={login} />
    </Router>
  );
};
export default Main;
