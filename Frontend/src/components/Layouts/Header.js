import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import "./Header.css"; // Import your CSS file

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Expense Management System
        </Link>
        <div className="navbar-right">
          {loginUser && <span className="user-name">{loginUser.name}</span>}
          <button className="btn btn-logout" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
