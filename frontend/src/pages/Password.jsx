import React from "react";
import Navbar from "../component/Navbar";

const Password = () => {
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
                    <th>No</th>
                    <th>Password</th>
                    <th>Website</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr></tr>
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
