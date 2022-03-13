import React from "react";
import logo from "../images/brandlogo.png"
import { FaUserCircle } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <div>
      <div className="container-fluid">
        <div className="header">
          <div className="brand-name"><img className="brand-img" src={logo}></img></div>
          <div className="header-options">
            <div className="user">< FaUserCircle/></div>
            <div className="notification"><IoMdNotifications/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
