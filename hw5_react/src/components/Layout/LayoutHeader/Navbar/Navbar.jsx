import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [sidebar, setSidbar] = useState(false);

  function handleClick() {
    setSidbar(!sidebar);
  }
  return (
    <>
      <IconContext.Provider value={{ color: "#304c89" }}>
        <div className="nav">
          <a href="#" onClick={handleClick}>
            <FaIcons.FaBars />
          </a>
        </div>
        <div className={sidebar ? "sidebar active" : "sidebar"}>
          <a href="#" onClick={handleClick}>
            <AiIcons.AiOutlineClose />
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contacts</a>
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
