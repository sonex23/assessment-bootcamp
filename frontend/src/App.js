import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainRouter from "./routes/MainRouter";

const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");

  //   // validasi access token
  //   if (accessToken) {
  //     dispatch({
  //       type: "USER_SET_EMAIL",
  //       payload: {
  //         email: "eddyfromtoken@mail.com",
  //       },
  //     });
  //   }
  // }, []);

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
