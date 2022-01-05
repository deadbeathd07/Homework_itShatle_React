import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  function closed() {
    setSidebar(!sidebar);
  }
  return (
    <>
      <header>
        <div className="logo">
          <p>LOGO</p>
        </div>
        <div className="menu" onClick={closed}>
          <p>Menu</p>
        </div>
        <div className={sidebar ? "sidebar" : "sidebar closed"}>
          <div className="btnClosed" onClick={closed}>
            X
          </div>

          <div className="items">
            <Router>
              <Link to={"/"} className="item" onClick={closed}>
                Home
              </Link>
              <Link to={"/reviews"} className="item" onClick={closed}>
                Reviews
              </Link>
              <Link to={"/contacts"} className="item" onClick={closed}>
                Contacts
              </Link>
            </Router>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
