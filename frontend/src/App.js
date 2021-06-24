import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainRouter from "./routes/MainRouter";
import userProfileAction from "./redux/user/profile/userProfileAction";

const App = () => {
  const dataUser = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken != null) {
      dispatch(userProfileAction.setProfileData(dataUser));
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
