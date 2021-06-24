import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import passwordAction from "../redux/password/passwordAction";

const Password = () => {
  const dispatch = useDispatch();
  const passwordList = useSelector((state) => state.passwordList);

  useEffect(() => {
    dispatch(passwordAction.fetchPassword());
  }, [passwordList]);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card shadow p-4">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Password</th>
                    <th>Website</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {passwordList.passwordList.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.password}</td>
                        <td>{data.website}</td>
                        <td>
                          <button className="btn btn-primary mr-3">Edit</button>
                          <button className="btn btn-danger ml3">Hapus</button>
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
