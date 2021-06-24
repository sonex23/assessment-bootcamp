import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userLoginAction from "../redux/user/login/userLoginAction";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userProfile);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            Sona Ermando
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              {user.id ? (
                <>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("/password");
                      }}
                      // href="/password"
                    >
                      Password List
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("/profile");
                      }}
                    >
                      Profile
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(userLoginAction.logout());
                        history.push("/login");
                      }}
                    >
                      Profile
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a
                      class="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("/login");
                      }}
                    >
                      Login
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("/register");
                      }}
                    >
                      Register
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
