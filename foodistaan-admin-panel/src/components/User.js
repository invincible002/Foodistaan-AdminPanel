import React from "react";
import Header from "./header.js";
import { MdStars, MdStore } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'

function User() {
  return (
    <div>
    <Header />
    <div className="row">
      <div className="  padd-0 col-3 left-side">
        <div className="left-options">
          <ul>
          <li className="left-options-list options-list-active">
                  <h5><Link to="/" className="left-options-list" ><MdStars className="list-icons" />Restaurants</Link></h5>
                </li>
                <li className="left-options-list">
                  <h5><Link to="/user" className="left-options-list" ><HiUsers className="list-icons" />Users</Link></h5>
                </li>
                <li>
                  <h5><Link to="/addVendors" className="left-options-list"><MdStore className="list-icons" />Add Vendors</Link></h5>
                </li>
          </ul>
        </div>
      </div>
      <div className="restaurants padd-0 col-9 ">



        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown">
            Monthly
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Weekly</Dropdown.Item>
            <Dropdown.Item href="#/action-2"> Yearly</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


        <div className="restaurant-stats">
          <div className="stats-wrapper">
            <div className="stat">
              <div className="stat-header">
                Total Sales
              </div>
              <div className="stat-value">
                345
              </div>
            </div>
            <div className="stat">
              <div className="stat-header">
                Total Orders
              </div>
              <div className="stat-value">
                96
              </div>
            </div>
            <div className="stat">
              <div className="stat-header">
                Active Restaurants
              </div>
              <div className="stat-value">
               54
              </div>
            </div>
            <div className="stat">
              <div className="stat-header">
                Total Restaurants
              </div>
              <div className="stat-value">
                345
              </div>
            </div>
            <div className="stat">
              <div className="stat-header">
                New Restaurants
              </div>
              <div className="stat-value">
                45
              </div>
            </div>


          </div>
        </div>

        <h1>Users</h1>
  
    
      </div>
    </div>

  </div>
  )
}

export default User