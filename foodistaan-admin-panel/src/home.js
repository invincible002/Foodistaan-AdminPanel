import React from "react";
import Header from "./components/header.js";
import {MdStars,MdStore} from "react-icons/md";
import {HiUsers} from "react-icons/hi";
import {Link} from "react-router-dom";


function Home(){
    return(
        <div>
        <Header/>
        <div className="row">
          <div className="  padd-0 col-3 left-side">
            <div className="left-options">
              <ul>
                <li className="left-options-list options-list-active">
                  <h5><MdStars className="list-icons"/>Restaurants</h5>
                </li>
                <li className="left-options-list">
                  <h5><HiUsers className="list-icons"/>Users</h5>
                </li>
                <li>
                  <h5><Link to="/addVendors"  className="left-options-list"><MdStore className="list-icons"/>Add Vendors</Link></h5>
                </li>
              </ul>
            </div>
          </div>
          <div className=" padd-0 col-9 ">
          </div>
        </div>
      </div>
    );
}
export default Home;