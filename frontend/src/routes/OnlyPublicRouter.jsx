import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const OnlyPublicRoute = (props) => {
  const user = useSelector((state) => state.userProfile);

  return user.id === "" ? (
    <Route {...props}>{props.children}</Route>
  ) : (
    <Redirect to="/password" />
  );
};

export default OnlyPublicRoute;
