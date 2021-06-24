import React from "react";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import passwordAction from "../redux/password/passwordAction";

const AddPassword = () => {
  const dispatch = useDispatch();
  const passwordData = useSelector((state) => state.passwordList.passwordData);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card shadow p-4">
              <h2 className="text-center mb-3">Add New Password</h2>
              <form>
                <div class="mb-3">
                  <label for="website" class="form-label">
                    Website
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="website"
                    value={passwordData.website}
                    onChange={(e) => {
                      dispatch(passwordAction.setWebsite(e.target.value));
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="password"
                    value={passwordData.password}
                    onChange={(e) => {
                      dispatch(passwordAction.setpassword(e.target.value));
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPassword;
