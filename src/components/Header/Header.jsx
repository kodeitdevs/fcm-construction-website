import "./Header.scss";
import React, { useState } from "react";
import { Button, Modal } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { NavLink } from "react-router-dom";
import Schedule from "./../Schedule/Schedule";

function Header() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="header-container">
      <div className="header-logo">
        <img src="assets/fcm-logo.png" alt="logo" />
      </div>
      <nav>
        <ul className="menu-bar">
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="active"
              style={{
                textDecoration: "none",
                color: "#262626",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              style={{
                textDecoration: "none",
                color: "#262626",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              style={{
                textDecoration: "none",
                color: "#262626",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={{
                textDecoration: "none",
                color: "#262626",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header-schedule-btn">
        <Button
          variant="contained"
          sx={{ borderRadius: 3 }}
          onClick={handleOpenModal}
        >
          <CalendarMonthIcon sx={{ mr: 1 }} />
          Schedule a consultation
        </Button>
        <Modal open={openModal} onClose={handleCloseModal}>
          <Schedule />
        </Modal>
      </div>
    </div>
  );
}
export default Header;
