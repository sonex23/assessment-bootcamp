import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = (props) => {
  const user = useSelector((state) => state.userProfile);

  return user.id ? (
    <Route {...props}>{props.children}</Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRouter;
