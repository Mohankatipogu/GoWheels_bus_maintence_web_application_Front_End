import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useDeletedriverMutation,useGetAllDriverListQuery,}
 from "../../services/gowheelsapi";
import "./Drivers.css";

function Admin() {
  const { isLoading, data } = useGetAllDriverListQuery();
  const [deleteDriverFn] = useDeletedriverMutation();
  const [search, setSearch] = useState("");
  const [selectedDriver, setSelectedDriver] = useState(null);

  const filteredDrivers =
    !isLoading &&
    data?.busExpenses?.filter((drive) =>
      drive?.driver?.name?.toLowerCase().includes(search.toLowerCase())
    );

  async function Delete(index, id) {
    if (window.confirm("Are You sure to Delete")) {
      try {
        await deleteDriverFn(id).unwrap();
        alert("Driver Deleted Successfully");
      } catch (err) {
        console.log(err);
      }
    }
  }

  function View_more(index) {
    const driver = filteredDrivers[index];
    console.log(driver)
    setSelectedDriver(driver?.driver); 
  }

  return (
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
            <thead className="table-dark text-center">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Salary</th>
                <th>Advance</th>
                <th>Balance</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {isLoading ? (
                <tr>
                  <td colSpan="8" className="text-center align-middle">
                    Loading...
                  </td>
                </tr>
              ) : filteredDrivers && filteredDrivers.length > 0 ? (
                filteredDrivers.map((drive, index) => (
                  <tr key={index}>
                    <td className="align-middle">{drive.driver.name}</td>
                    <td className="align-middle">{drive.driver.email}</td>
                    <td className="align-middle">{drive.driver.mobile}</td>
                    <td className="align-middle">Rs. {drive.driver.salary}</td>
                    <td className="align-middle">Rs. {drive.driver.advance}</td>
                    <td className="align-middle">
                      Rs. {drive.driver.salary - drive.driver.advance}
                    </td>
                    <td>
                      <button
                        className="btn bg-danger m-2"
                        onClick={() => Delete(index, filteredDrivers[index]._id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link to="/drivers/editdriverform">
                        <button className="btn btn-warning m-2">Edit</button>
                      </Link>
                      <button className="btn btn-dark m-2" onClick={() => View_more(index)}> View More</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No drivers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {selectedDriver && (
       <div className="modal show d-block" tabIndex="-1">
       <div className="modal-dialog modal-lg">
         <div className="modal-content">
           <div className="modal-header">
             <h5 className="modal-title">Driver Details</h5>
             <button
               type="button"
               className="btn-close"
               onClick={() => setSelectedDriver(null)}
             ></button>
           </div>
           <div className="modal-body">
             <table className="table table-striped table-bordered">
                <div className="d-flex align-items-center justify-content-center ms-auto my-3" >
                  <img src={selectedDriver.image} alt="" width="200px" height="auto" className="img-fluid rounded" style={{marginLeft:"100%"}}/>
                </div>
               <tbody>
                 <tr>
                   <th>Name</th>
                   <td>{selectedDriver.name}</td>
                 </tr>
                 <tr>
                   <th>Salary</th>
                   <td>Rs. {selectedDriver.salary}</td>
                 </tr>
                 <tr>
                   <th>Address</th>
                   <td>{selectedDriver.address || "N/A"}</td>
                 </tr>
                 <tr>
                   <th>Email</th>
                   <td>{selectedDriver.email}</td>
                 </tr>
                 <tr>
                   <th>Mobile</th>
                   <td>{selectedDriver.mobile}</td>
                 </tr>
                 <tr>
                   <th>Advance</th>
                   <td>Rs. {selectedDriver.advance}</td>
                 </tr>
                 <tr>
                   <th>Balance</th>
                   <td>Rs. {selectedDriver.salary - selectedDriver.advance}</td>
                 </tr>
               </tbody>
             </table>
           </div>
           <div className="modal-footer">
             <button
               type="button"
               className="btn btn-secondary"
               onClick={() => setSelectedDriver(null)}
             >
               Close
             </button>
           </div>
         </div>
       </div>
     </div>     
      )}
    </div>
  );
}

export default Admin;
