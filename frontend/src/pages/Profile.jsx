import React from "react";
import Navbar from "../component/Navbar";
import { useSelector, useDispatch } from "react-redux";
import userProfileAction from "../redux/user/profile/userProfileAction";

const Profile = () => {
  const userProfileData = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  const handlerSubmitProfile = (e) => {
    e.preventDefault();
    dispatch(
      userProfileAction.updateProfile(
        userProfileData.id,
        userProfileData.fullname,
        userProfileData.address
      )
    );
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card shadow p-4">
              <h1 className="text-center mb-4">Profile</h1>
              <div className="row">
                <div className="col-12 col-md-4">
                  <img src="person-circle.svg" alt="" width="100%" />
                  <br />
                  <div className="text-center">
                    <span>{userProfileData.fullname}</span> <br />
                    <span>{userProfileData.address}</span>
                    <br />
                    <span>{userProfileData.email}</span>
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <form onSubmit={handlerSubmitProfile}>
                    <div class="mb-3">
                      <label htmlFor="fullname" class="form-label">
                        Fullname
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="fullname"
                        value={userProfileData.fullname}
                        onChange={(e) => {
                          dispatch(
                            userProfileAction.setFullname(e.target.value)
                          );
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
                        id="address"
                        value={userProfileData.address}
                        onChange={(e) => {
                          dispatch(
                            userProfileAction.setAddress(e.target.value)
                          );
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      // disabled={userLoginData.isLoading ? true : false}
                    >
                      {/* {userLoginData.isLoading ? "Loading...." : "Submit"} */}
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
