import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { message } from "antd";
import "./Header.css"; // Import your CSS file
import logo from "./fist2.jpg";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

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
        <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" className="logo" />
          Expense Management System
        </Link>
        <div className="navbar-right">
          {loginUser && location.pathname !== "/login" && ( // Check if not on the login page
            <>
              <span className="user-name">{loginUser.name}</span>
              <button className="btn btn-logout" onClick={logoutHandler}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;