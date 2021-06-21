import React from "react";
import Navbar from "../component/Navbar";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import userLoginAction from "../redux/user/login/userLoginAction";

const Login = () => {
  const userLoginData = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const history = useHistory();

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      userLoginAction.login(
        userLoginData.email,
        userLoginData.password,
        history
      )
    );
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="card col-12 col-md-6 shadow p-5">
            <pre>{JSON.stringify(userLoginData)}</pre>
            <form onSubmit={loginSubmitHandler}>
              <h2 className="text-center">Login</h2>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={userLoginData.email}
                  onChange={(e) => {
                    dispatch(userLoginAction.setEmail(e.target.value));
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={userLoginData.password}
                  onChange={(e) => {
                    dispatch(userLoginAction.setPassword(e.target.value));
                  }}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
