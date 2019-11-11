import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../Logo";

import { StyledAside } from "./NavBar.styles";

const NavBar = () => (
  <StyledAside>
    <Logo />
    <ol className="top-nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/AddLocation">Add Location</Link>
      </li>
      <li>
        <Link to="/AddBooking">Add Booking</Link>
      </li>
    </ol>
    <ol className="btm-nav">
      <li>
        <Link to="">Settings</Link>
      </li>
      <li>
        <Link to="">Logout</Link>
      </li>
    </ol>
  </StyledAside>
);

export { NavBar };
