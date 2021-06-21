import React from "react";
import Navbar from "../component/Navbar";
const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="card col-12 col-md-6 shadow p-5">
            <form>
              <h2 className="text-center">Register</h2>
              <div class="mb-3">
                <label for="fullname" class="form-label">
                  Fullname
                </label>
                <input type="text" class="form-control" id="fullname" />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">
                  Address
                </label>
                <input type="text" class="form-control" id="fullname" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
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
