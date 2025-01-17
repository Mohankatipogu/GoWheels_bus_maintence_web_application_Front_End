import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllDriverListQuery } from "../../services/gowheelsapi";
import "./Drivers.css";
import User from "./user";
import Admin from "./admin";
import Adminexpenses from "./Adminexpenses";

function Drivers() {
  const { isLoading, data } = useGetAllDriverListQuery();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      navigate("/drivers");
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
            <User />
          </div>
        );
      } else if (filteredData[0].role === "admin") {
        return (
          <div>
            <Admin />
          </div>
        );
      }
    }
  }

  return <h1>Loading...</h1>;
}

export default Drivers;
