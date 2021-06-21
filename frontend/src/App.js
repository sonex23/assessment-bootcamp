import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
