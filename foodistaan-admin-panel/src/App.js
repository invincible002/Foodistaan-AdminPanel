import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddVendors from "./components/addVendors";
import User from "./components/User";




function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home/>}/>  
      <Route path="/user" element={<User/>}/>
      <Route path="/addVendors" element={<AddVendors/>}/>
    </Routes>
    </>
  );
}

export default App;
