import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "./App";
import axios from "axios";

const Navbar = () => {
  const user = useContext(userContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("http://localhost:4001/logout")
      .then((res) => {
        if (res.data === "Success") navigate(0);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        background: "blue",
        height: "10%",
        alignItems: "center",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        position: "absolute",
        top: "0%",
        left: "0%",
      }}
    >
      <div>
        <h3>Blog</h3>
      </div>
      <div
        style={{
          display: "flex",
          width: "40%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Link style={{ color: "whitesmoke" }} to="/home">
          Home
        </Link>
        <Link style={{ color: "whitesmoke" }} to="/create">
          Create
        </Link>
        <Link style={{ color: "whitesmoke" }} to="/contact">
          Others
        </Link>
      </div>

      {user.username ? (
        <div>
          <input type="button" value="Logout" onClick={handleLogout} />
        </div>
      ) : (
        <div>
          <h5>
            <Link to="/register">Register/Login</Link>
          </h5>
        </div>
      )}
    </div>
  );
};

export default Navbar;
