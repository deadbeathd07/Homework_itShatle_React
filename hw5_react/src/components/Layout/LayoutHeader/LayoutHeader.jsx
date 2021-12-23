import React from "react";
import "./LayoutHeader.css";
import Navbar from "../LayoutHeader/Navbar/Navbar";


function LayoutHeader() {
  
  return (
    <header className="header">
      <div className="logo">
        <p>LOGO</p>
      </div>
      <Navbar />
    </header>
  );
}
export default LayoutHeader;
