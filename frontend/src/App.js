import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from "react-jwt";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainRouter from "./routes/MainRouter";
import userProfileAction from "./redux/user/profile/userProfileAction";

const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userProfile);
  const accessToken = localStorage.getItem("accessToken");
  const myAccessToken = decodeToken(accessToken);

  useEffect(() => {
    if (accessToken) {
      dispatch(userProfileAction.getProfile(myAccessToken.user_id));
      // alert(myAccessToken.user_id);
    }
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <MainRouter />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
