import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  // State to track the switch (ON/OFF)
  const [isToggled, setIsToggled] = useState(false);

  // Function to handle switch toggle
  const handleToggle = () => {
    setIsToggled(!isToggled);
    console.log(isToggled ? "Switch is OFF" : "Switch is ON");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>

          {/* On/Off switch */}
          <div className="form-check form-switch text-white">
            <input
              className="form-check-input"
              type="checkbox"
              id="toggleSwitch"
              checked={isToggled}
              onChange={handleToggle}
            />
            <label className="form-check-label" htmlFor="toggleSwitch">
              {isToggled ? "Enable Light Mode" : "Enable Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
