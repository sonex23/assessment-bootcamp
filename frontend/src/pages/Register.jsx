import React from "react";
import Navbar from "../component/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import userRegisterAction from "../redux/user/register/userRegisterAction";

const Register = () => {
  const userRegisterData = useSelector((state) => state.userRegister);
  const dispatch = useDispatch();

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      userRegisterAction.register(
        userRegisterData.fullname,
        userRegisterData.address,
        userRegisterData.email,
        userRegisterData.password
      )
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="card col-12 col-md-6 shadow p-5">
            <form onSubmit={registerSubmitHandler}>
              <h2 className="text-center">Register</h2>
              <div class="mb-3">
                <label for="fullname" class="form-label">
                  Fullname
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullname"
                  value={userRegisterData.fullname}
                  onChange={(e) => {
                    dispatch(userRegisterAction.setFullname(e.target.value));
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullname"
                  value={userRegisterData.address}
                  onChange={(e) => {
                    dispatch(userRegisterAction.setAddress(e.target.value));
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  onChange={(e) => {
                    dispatch(userRegisterAction.setEmail(e.target.value));
                  }}
                  value={userRegisterData.email}
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
                  value={userRegisterData.password}
                  onChange={(e) => {
                    dispatch(userRegisterAction.setPassword(e.target.value));
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

export default Register;
