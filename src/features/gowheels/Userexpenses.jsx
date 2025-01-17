import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllBusexpensesQuery } from '../../services/gowheelsapi';
import "./Userexpenses.css"
function Userexpenses() {
    const { isLoading, data } = useGetAllBusexpensesQuery();
      console.log(isLoading, data);
      const [search, setSearch] = useState('');
      const expensedata = !isLoading && data?.getbusexpenses?.filter((exp) => {
          return exp?.expenses?.Driver_name?.toLowerCase().includes(search.toLowerCase());
      })
  return (
    <div>
        <div>
      <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="text-dark">Expenses</h1>
        <Link to="/expenses/expensesform">
          <button className="btn btn-primary addbtn">Add Expenses</button>
        </Link>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Driver Name"
          className="form-control rounded-pill px-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        {!isLoading && expensedata?.length > 0 ? (
          expensedata.map((exp, index) => (
            <div key={index} className="card mb-3 shadow-sm border-0 rounded">
              <div className="row g-0 align-items-center">
                <div className="col-md-9 p-3">
                  <h5 className="card-title text-dark mb-1">Driver Name: {exp.expenses.Driver_name}</h5>
                  <p className="card-text text-muted mb-1">Bus Number: {exp.expenses.Bus_Number}</p>
                  <p className="card-text text-muted mb-1">Amount: ₹{exp.expenses.amount}</p>
                  <p className="card-text text-muted">Details: {exp.expenses.details}</p>
                </div>
                <div className="col-md-3 text-end p-3">
                  <img
                    src={exp.expenses.image}
                    alt=""
                    className="img-fluid rounded"
                    style={{ maxWidth: '150px', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No expenses found.</p>
        )}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Userexpenses
