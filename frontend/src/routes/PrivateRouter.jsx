import React from "react";
import { Redirect, Route } from "react-router-dom";
// import { useSelector } from "react-redux";

const PrivateRouter = (props) => {
  // const user = useSelector((state) => state.userProfile);
  const accessToken = localStorage.getItem("accessToken");

  return accessToken ? (
    <Route {...props}>{props.children}</Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRouter;
