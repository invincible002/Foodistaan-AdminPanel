import React from "react";
import Header from "./header.js";
import {MdStars,MdStore} from "react-icons/md";
import {HiUsers} from "react-icons/hi";
import {AiOutlinePlus,AiFillCaretDown} from "react-icons/ai";
import {GoPrimitiveDot} from "react-icons/go";
import {Link} from "react-router-dom";

export default function AddVendors(){
    return(
        <>
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
          <div className="addVendor-wrapper padd-0 col-8 ">
          <h3 className="title">Add Details of Vendors</h3>
        <div className="form-wrapper">
            <form>
                <div><label className="label" for="restaurant">Restaurant Name</label><br/>
                <input className="input" type="text" id="restaurant" placeholder="Type Restaurant Name"></input></div>
                <div> <label className="label" for="person">Person Name</label><br/>
                <input className="input" type="text" id="person" placeholder="Type Person Name"></input></div>
                <div><label className="label" for="location">Location</label><br/>
                <input className="input" type="text" id="location" placeholder="Type Location"></input></div>
                <div className="row">
                    <div className="padd-0  col-4">
                    <label className="label" for="cuisine">Cuisine</label>
                    <input className="input" type="text" id="cuisine" placeholder="Type Cuisine"></input>
                    </div>
                    <div className="padd-0 col-4"></div>
                    <div className="padd-0 col-4">
                    <label className="label" for="price">Price</label>
                    <input className="input" type="text" id="price" placeholder="Type Price"></input>
                    </div>
                </div>
                <button className="addCuisine-btn">Add Cuisine <AiOutlinePlus/></button>
                <div className="row">
                    <div className="padd-0 col-5">
                        <span className="vendor-delivery-btn-text">Delivery</span>
                        <button className="vendor-delivery-btn"><GoPrimitiveDot className="dot-icon"/>yes <AiFillCaretDown/></button>
                    </div>
                    <div className="padd-0 col-2"></div>
                    <div className="padd-0 col-5">
                    <span className="vendor-delivery-btn-text">Takeaway</span>
                    <button className="vendor-delivery-btn"><GoPrimitiveDot className="dot-icon"/>yes <AiFillCaretDown/></button>
                    </div>
                </div>
                <div className="submit">
                <button className="submit-btn">Submit</button>
                </div>
            </form>
        </div>
          </div>
        </div>
      </div>
        </>
    );
}