import React from "react";
import { Route } from "react-router-dom";
import OnlyPublicRoute from "./OnlyPublicRouter";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Password from "../pages/Password";
import Profile from "../pages/Profile";
import PrivateRouter from "./PrivateRouter";

const MainRouter = () => {
  return (
    <div>
      <OnlyPublicRoute path="/login" exact component={Login} />
      <OnlyPublicRoute path="/register" exact component={Register} />
      <PrivateRouter path="/password" exact component={Password} />
      <PrivateRouter path="/profile" exact component={Profile} />
      <Route path="/" exact component={Home} />
    </div>
  );
};

export default MainRouter;
