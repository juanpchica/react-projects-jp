import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BirthdayReminder from "./pages/simple/BirthdayReminder";

const App = () => {
  return (
    <Router>
      <BirthdayReminder />
    </Router>
  );
};

export default App;
