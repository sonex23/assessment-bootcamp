import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Password from "./pages/Password";
import Profile from "./pages/Profile";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact>
            <Login />
          </Route>
          <PrivateRoute path="/password" component={Password} />
          <PrivateRoute path="/profile" component={Profile} />

          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
