import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllDriverListQuery } from "../../services/gowheelsapi";
import "./Drivers.css";

function User() {
  const { isLoading, data } = useGetAllDriverListQuery();
  const [search, setSearch] = useState("");

  const filteredDrivers =!isLoading && data?.busExpenses?.filter((drive) =>drive.driver && drive.driver.name &&
        drive.driver.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center my-4">
          <h1>Drivers</h1>
          <Link to="/drivers/registation">
            <button className="btn btn-primary">Add Driver</button>
          </Link>
        </div>
        <div className="m-5 mx-auto">
          <div className="d-flex align-items-center mb-4">
            <input
              value={search}
              type="text"
              id="search"
              name="search"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              className="form-control w-50 me-2"
            />
            <i className="bi bi-search fs-3"></i>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Salary</th>
                  <th>Advance</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : filteredDrivers && filteredDrivers.length > 0 ? (
                  filteredDrivers.map((drive, index) => (
                    <tr key={index}>
                      <td>{drive.driver.name}</td>
                      <td>{drive.driver.email}</td>
                      <td>{drive.driver.mobile}</td>
                      <td>{drive.driver.salary} Rs</td>
                      <td>{drive.driver.advance} Rs</td>
                      <td>{drive.driver.salary - drive.driver.advance} Rs</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No drivers found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
