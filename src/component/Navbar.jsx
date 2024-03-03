import React, { useState, useEffect } from "react";
import navbar from  "./CSS/navbar.css";

function Navbar() {
  const [navbarBg, setnavbarBg] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setnavbarBg("#F5C6EC");
      } else {
        setnavbarBg("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top w-100" style={{ backgroundColor: navbarBg }}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMz_BclBO0MeWrP76kpiIcmzz90mgU2LKYGQ&usqp=CAU"
            alt="Bootstrap"
            width="30"
            height="24"
            className="img-fluid"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Events
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
