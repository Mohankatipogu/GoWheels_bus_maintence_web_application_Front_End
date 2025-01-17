import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllBusexpensesQuery } from '../../services/gowheelsapi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Adminexpenses from './Adminexpenses';
import Userexpenses from './Userexpenses';
function Expenses() {
  const { isLoading, data } = useGetAllBusexpensesQuery();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      navigate("/expenses");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (data !== undefined) {
    const localStorageItem = window.localStorage.getItem("myname");
    const filteredData = !isLoading && data?.totalData?.filter((each) => each.username === localStorageItem);

    if (filteredData?.length > 0) {
      if (filteredData[0].role === "user") {
        return (
          <div>
            <Userexpenses></Userexpenses>
          </div>
        );
      } else if (filteredData[0].role === "admin") {
        return (
          <div>
            <Adminexpenses></Adminexpenses>
          </div>
        );
      }
    }
  }
  return <h1>Loading...</h1>;
}

export default Expenses;
