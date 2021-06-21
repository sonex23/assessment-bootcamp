import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  const userProfileData = useSelector((state) => state.userProfile);
  return userProfileData.id === "" ? (
    <Redirect to="/login"></Redirect>
  ) : (
    <h1>Ini Private Route</h1>
  );
};

export default PrivateRoute;
