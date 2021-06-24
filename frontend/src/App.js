import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainRouter from "./routes/MainRouter";

const App = () => {
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
