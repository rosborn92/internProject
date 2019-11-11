import PropTypes from "prop-types";
import React from "react";

import { Icon } from "../Icon";

import {
  AddBookingStyledHeader,
  LocationIdHeader
} from "./AddBookingHeader.styles";

const AddBookingHeader = ({ name, location_name }) => (
  <AddBookingStyledHeader>
    <h1>{name}</h1>
    <hr />
    <LocationIdHeader>
      {location_name}
      <span style={{ marginLeft: "20px" }}>
        {" "}
        <Icon height="14" name="vector" width="20" />{" "}
      </span>
    </LocationIdHeader>
  </AddBookingStyledHeader>
);

AddBookingHeader.propTypes = {
  location_name: PropTypes.string,
  name: PropTypes.string
};
export { AddBookingHeader };
