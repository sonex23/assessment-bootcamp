import React from "react";
import { Route } from "react-router-dom";
import OnlyPublicRoute from "./OnlyPublicRouter";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Password from "../pages/Password";
import Profile from "../pages/Profile";
import AddPassword from "../pages/AddPassword";
import PrivateRouter from "./PrivateRouter";
import EditPassword from "../pages/EditPassword";

const MainRouter = () => {
  return (
    <div>
      <OnlyPublicRoute path="/login" exact component={Login} />
      <OnlyPublicRoute path="/register" exact component={Register} />
      <PrivateRouter path="/password" exact component={Password} />
      <PrivateRouter path="/profile" exact component={Profile} />
      <PrivateRouter path="/password/add" exact component={AddPassword} />
      <PrivateRouter path="/password/edit/:id" exact component={EditPassword} />
      <Route path="/" exact component={Home} />
    </div>
  );
};

export default MainRouter;
