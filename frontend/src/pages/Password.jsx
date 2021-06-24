import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import passwordAction from "../redux/password/passwordAction";
import { useHistory } from "react-router-dom";

const Password = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const passwordList = useSelector((state) => state.passwordList);

  useEffect(() => {
    dispatch(passwordAction.fetchPassword());
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card shadow p-4">
              <h2 className="text-center mb-3">Password List</h2>
              <button
                className="btn btn-success w-25"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/password/add");
                }}
              >
                Add new Password
              </button>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Password</th>
                    <th>Website</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {passwordList.passwordList != null &&
                    passwordList.passwordList.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{data.password}</td>
                          <td>{data.website}</td>
                          <td>
                            <button
                              className="btn btn-primary mr-3"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(
                                  passwordAction.setPassword(data.password)
                                );
                                dispatch(
                                  passwordAction.setWebsite(data.website)
                                );
                                history.push(`/password/edit/${data.id}`);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger ml3"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(
                                  passwordAction.deletePassword(data.id)
                                );
                              }}
                            >
                              Hapus
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  {/* <pre>{JSON.stringify(passwordList)}</pre> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
